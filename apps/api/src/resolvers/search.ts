import { Args, ArgsType, Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql';
import type { Context } from '../client/context.ts';
import { SearchResultType } from '../constants/search-result-type.ts';

@ArgsType()
export class SearchArgs {
  @Field(() => String, { simple: true })
  query: string;
}

@ObjectType()
export class SearchResult {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => Number, { nullable: true })
  type: SearchResultType;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;
}

@Resolver()
export class SearchResolver {
  @Query(() => [SearchResult], { nullable: true })
  async search(
    @Args(() => SearchArgs) { query }: SearchArgs,
    @Ctx() { prisma }: Context,
  ): Promise<SearchResult[] | null> {
    const [users, customers, customerContacts] = await Promise.all([
      getUsers(query, prisma),
      getCustomers(query, prisma),
      getCustomerContacts(query, prisma),
    ]);

    const results = [...users, ...customers, ...customerContacts];

    return results.length > 0 ? results : null;
  }
}

const getCustomers = async (query: string, prisma: Context['prisma']): Promise<SearchResult[]> => {
  const customers = await prisma.customer.findMany({
    where: {
      name: {
        contains: query,
      },
    },
    select: {
      id: true,
      name: true,
      city: true,
      state: {
        select: {
          code: true,
        },
      },
    },
  });

  return customers.map(customer => ({
    id: customer.id,
    type: SearchResultType.customer,
    name: customer.name,
    description: `${customer.city}, ${customer.state.code}`,
  }));
};

const getCustomerContacts = async (
  query: string,
  prisma: Context['prisma'],
): Promise<SearchResult[]> => {
  const customContacts = await prisma.customerContact.findMany({
    where: {
      OR: [
        {
          firstName: {
            contains: query,
          },
        },
        {
          lastName: {
            contains: query,
          },
        },
        {
          email: {
            contains: query,
          },
        },
        {
          phone: {
            contains: query,
          },
        },
      ],
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      state: {
        select: {
          code: true,
        },
      },
    },
  });
  return customContacts.map(contact => ({
    id: contact.id,
    type: SearchResultType.customerContact,
    name: `${contact.firstName} ${contact.lastName}`,
    description: `${contact.city}, ${contact.state.code}`,
  }));
};

const getUsers = async (query: string, prisma: Context['prisma']): Promise<SearchResult[]> => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          firstName: {
            contains: query,
          },
        },
        {
          lastName: {
            contains: query,
          },
        },
      ],
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      state: {
        select: {
          code: true,
        },
      },
    },
  });

  return users.map(user => ({
    id: user.id,
    type: SearchResultType.user,
    name: `${user.firstName} ${user.lastName}`,
    description: `${user.city}, ${user.state.code}`,
  }));
};
