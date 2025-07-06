import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import { Args, ArgsType, Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql';
import type { Context } from '../client/context.js';
import { accessTokenSecret } from '../config.ts';
// import { compareHash } from '../crypto/hash.js';

@ArgsType()
export class SigninArgs {
  @Field(() => String, { simple: true })
  username: string;

  @Field(() => String, { simple: true })
  password: string;
}

@ObjectType()
export class SigninResponse {
  @Field(() => String)
  token: string;
  @Field(() => String)
  userId: string;
}

@Resolver()
export class AuthResolver {
  /**
   * Validate user credentials and return a JWT if valid.
   *
   * @param {SigninArgs} { userName, password } Credentials to validate.
   * @param {Context} { prisma } Prisma client.
   * @returns {Promise<string>} JWT if valid, null if invalid.
   */
  @Query(() => SigninResponse, { nullable: true })
  async signin(
    @Args(() => SigninArgs) { username, password }: SigninArgs,
    @Ctx() { prisma }: Context,
  ): Promise<{ token: string; userId: string } | null> {
    const user = await prisma.user.findFirst({
      where: {
        email: username,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      throw new GraphQLError('User not found', {
        extensions: { code: 'NOT_FOUND' },
      });
    }

    // validate password against stored hash
    const hashPassword = user.password;
    const isValid = password === hashPassword;
    // const isValid = compareHash(password, hashPassword);

    if (isValid) {
      // credentials are valid, so return a JWT
      const token = jwt.sign({ username }, accessTokenSecret!, {
        expiresIn: '1h',
      });
      return { token, userId: user.id };
    }

    return null;
  }

  /**
   * Sign user out.
   */
  @Query(() => Boolean)
  signout() {
    jwt.sign({}, accessTokenSecret!, {
      expiresIn: '1s', // Expire the token immediately
    });

    return true;
  }
}
