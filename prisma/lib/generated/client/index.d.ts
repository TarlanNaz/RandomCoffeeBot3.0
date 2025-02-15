
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model UserMeeting
 * 
 */
export type UserMeeting = $Result.DefaultSelection<Prisma.$UserMeetingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMeeting`: Exposes CRUD operations for the **UserMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMeetings
    * const userMeetings = await prisma.userMeeting.findMany()
    * ```
    */
  get userMeeting(): Prisma.UserMeetingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Meeting: 'Meeting',
    Topic: 'Topic',
    Place: 'Place',
    UserMeeting: 'UserMeeting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "meeting" | "topic" | "place" | "userMeeting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      UserMeeting: {
        payload: Prisma.$UserMeetingPayload<ExtArgs>
        fields: Prisma.UserMeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>
          }
          findFirst: {
            args: Prisma.UserMeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>
          }
          findMany: {
            args: Prisma.UserMeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>[]
          }
          create: {
            args: Prisma.UserMeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>
          }
          createMany: {
            args: Prisma.UserMeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>[]
          }
          delete: {
            args: Prisma.UserMeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>
          }
          update: {
            args: Prisma.UserMeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>
          }
          deleteMany: {
            args: Prisma.UserMeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>[]
          }
          upsert: {
            args: Prisma.UserMeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetingPayload>
          }
          aggregate: {
            args: Prisma.UserMeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMeeting>
          }
          groupBy: {
            args: Prisma.UserMeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMeetingCountArgs<ExtArgs>
            result: $Utils.Optional<UserMeetingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    meeting?: MeetingOmit
    topic?: TopicOmit
    place?: PlaceOmit
    userMeeting?: UserMeetingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    meetings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | UserCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMeetingWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    users: number
    topics: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MeetingCountOutputTypeCountUsersArgs
    topics?: boolean | MeetingCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMeetingWhereInput
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    meetings: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | TopicCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type PlaceCountOutputType
   */

  export type PlaceCountOutputType = {
    meetings: number
  }

  export type PlaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | PlaceCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceCountOutputType
     */
    select?: PlaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    networkingPoints: number | null
    countMeetings: number | null
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    networkingPoints: number | null
    countMeetings: number | null
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    tgName: string | null
    tgId: string | null
    networkingPoints: number | null
    countMeetings: number | null
    city: string | null
    rating: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    tgName: string | null
    tgId: string | null
    networkingPoints: number | null
    countMeetings: number | null
    city: string | null
    rating: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    age: number
    tgName: number
    tgId: number
    networkingPoints: number
    countMeetings: number
    city: number
    rating: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    networkingPoints?: true
    countMeetings?: true
    rating?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    networkingPoints?: true
    countMeetings?: true
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    tgName?: true
    tgId?: true
    networkingPoints?: true
    countMeetings?: true
    city?: true
    rating?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    tgName?: true
    tgId?: true
    networkingPoints?: true
    countMeetings?: true
    city?: true
    rating?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    tgName?: true
    tgId?: true
    networkingPoints?: true
    countMeetings?: true
    city?: true
    rating?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    age: number
    tgName: string
    tgId: string
    networkingPoints: number
    countMeetings: number
    city: string
    rating: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    tgName?: boolean
    tgId?: boolean
    networkingPoints?: boolean
    countMeetings?: boolean
    city?: boolean
    rating?: boolean
    meetings?: boolean | User$meetingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    tgName?: boolean
    tgId?: boolean
    networkingPoints?: boolean
    countMeetings?: boolean
    city?: boolean
    rating?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    tgName?: boolean
    tgId?: boolean
    networkingPoints?: boolean
    countMeetings?: boolean
    city?: boolean
    rating?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    tgName?: boolean
    tgId?: boolean
    networkingPoints?: boolean
    countMeetings?: boolean
    city?: boolean
    rating?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "tgName" | "tgId" | "networkingPoints" | "countMeetings" | "city" | "rating", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | User$meetingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      meetings: Prisma.$UserMeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number
      tgName: string
      tgId: string
      networkingPoints: number
      countMeetings: number
      city: string
      rating: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends User$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, User$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly tgName: FieldRef<"User", 'String'>
    readonly tgId: FieldRef<"User", 'String'>
    readonly networkingPoints: FieldRef<"User", 'Int'>
    readonly countMeetings: FieldRef<"User", 'Int'>
    readonly city: FieldRef<"User", 'String'>
    readonly rating: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.meetings
   */
  export type User$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    where?: UserMeetingWhereInput
    orderBy?: UserMeetingOrderByWithRelationInput | UserMeetingOrderByWithRelationInput[]
    cursor?: UserMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMeetingScalarFieldEnum | UserMeetingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    date: Date | null
    placeId: string | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    date: Date | null
    placeId: string | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    date: number
    placeId: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    date?: true
    placeId?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    date?: true
    placeId?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    date?: true
    placeId?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    date: Date
    placeId: string
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    date?: boolean
    placeId?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
    users?: boolean | Meeting$usersArgs<ExtArgs>
    topics?: boolean | Meeting$topicsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    date?: boolean
    placeId?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    date?: boolean
    placeId?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    date?: boolean
    placeId?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "date" | "placeId", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
    users?: boolean | Meeting$usersArgs<ExtArgs>
    topics?: boolean | Meeting$topicsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      place: Prisma.$PlacePayload<ExtArgs>
      users: Prisma.$UserMeetingPayload<ExtArgs>[]
      topics: Prisma.$TopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      date: Date
      placeId: string
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    place<T extends PlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaceDefaultArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    users<T extends Meeting$usersArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    topics<T extends Meeting$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */ 
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly date: FieldRef<"Meeting", 'DateTime'>
    readonly placeId: FieldRef<"Meeting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting.users
   */
  export type Meeting$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    where?: UserMeetingWhereInput
    orderBy?: UserMeetingOrderByWithRelationInput | UserMeetingOrderByWithRelationInput[]
    cursor?: UserMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMeetingScalarFieldEnum | UserMeetingScalarFieldEnum[]
  }

  /**
   * Meeting.topics
   */
  export type Meeting$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    count: number | null
  }

  export type TopicSumAggregateOutputType = {
    count: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    count: number | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    count: number | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    count: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    count?: true
  }

  export type TopicSumAggregateInputType = {
    count?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    count?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    count?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    count?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    count: number
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    count?: boolean
    meetings?: boolean | Topic$meetingsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    count?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    count?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    count?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "count", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Topic$meetingsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      count: number
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Topic$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */ 
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
    readonly title: FieldRef<"Topic", 'String'>
    readonly count: FieldRef<"Topic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
  }

  /**
   * Topic.meetings
   */
  export type Topic$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceAvgAggregateOutputType = {
    count: number | null
  }

  export type PlaceSumAggregateOutputType = {
    count: number | null
  }

  export type PlaceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    address: string | null
    count: number | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    address: string | null
    count: number | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    address: number
    count: number
    _all: number
  }


  export type PlaceAvgAggregateInputType = {
    count?: true
  }

  export type PlaceSumAggregateInputType = {
    count?: true
  }

  export type PlaceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    count?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    count?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    count?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _avg?: PlaceAvgAggregateInputType
    _sum?: PlaceSumAggregateInputType
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    address: string
    count: number
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    address?: boolean
    count?: boolean
    meetings?: boolean | Place$meetingsArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    address?: boolean
    count?: boolean
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    address?: boolean
    count?: boolean
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    address?: boolean
    count?: boolean
  }

  export type PlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "address" | "count", ExtArgs["result"]["place"]>
  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Place$meetingsArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      address: string
      count: number
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlaceCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {PlaceUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Place$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Place$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Place model
   */ 
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'String'>
    readonly createdAt: FieldRef<"Place", 'DateTime'>
    readonly updatedAt: FieldRef<"Place", 'DateTime'>
    readonly name: FieldRef<"Place", 'String'>
    readonly address: FieldRef<"Place", 'String'>
    readonly count: FieldRef<"Place", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place createManyAndReturn
   */
  export type PlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
  }

  /**
   * Place updateManyAndReturn
   */
  export type PlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
  }

  /**
   * Place.meetings
   */
  export type Place$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model UserMeeting
   */

  export type AggregateUserMeeting = {
    _count: UserMeetingCountAggregateOutputType | null
    _min: UserMeetingMinAggregateOutputType | null
    _max: UserMeetingMaxAggregateOutputType | null
  }

  export type UserMeetingMinAggregateOutputType = {
    userId: string | null
    meetingId: string | null
  }

  export type UserMeetingMaxAggregateOutputType = {
    userId: string | null
    meetingId: string | null
  }

  export type UserMeetingCountAggregateOutputType = {
    userId: number
    meetingId: number
    _all: number
  }


  export type UserMeetingMinAggregateInputType = {
    userId?: true
    meetingId?: true
  }

  export type UserMeetingMaxAggregateInputType = {
    userId?: true
    meetingId?: true
  }

  export type UserMeetingCountAggregateInputType = {
    userId?: true
    meetingId?: true
    _all?: true
  }

  export type UserMeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMeeting to aggregate.
     */
    where?: UserMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeetings to fetch.
     */
    orderBy?: UserMeetingOrderByWithRelationInput | UserMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMeetings
    **/
    _count?: true | UserMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMeetingMaxAggregateInputType
  }

  export type GetUserMeetingAggregateType<T extends UserMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMeeting[P]>
      : GetScalarType<T[P], AggregateUserMeeting[P]>
  }




  export type UserMeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMeetingWhereInput
    orderBy?: UserMeetingOrderByWithAggregationInput | UserMeetingOrderByWithAggregationInput[]
    by: UserMeetingScalarFieldEnum[] | UserMeetingScalarFieldEnum
    having?: UserMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMeetingCountAggregateInputType | true
    _min?: UserMeetingMinAggregateInputType
    _max?: UserMeetingMaxAggregateInputType
  }

  export type UserMeetingGroupByOutputType = {
    userId: string
    meetingId: string
    _count: UserMeetingCountAggregateOutputType | null
    _min: UserMeetingMinAggregateOutputType | null
    _max: UserMeetingMaxAggregateOutputType | null
  }

  type GetUserMeetingGroupByPayload<T extends UserMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], UserMeetingGroupByOutputType[P]>
        }
      >
    >


  export type UserMeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    meetingId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMeeting"]>

  export type UserMeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    meetingId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMeeting"]>

  export type UserMeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    meetingId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMeeting"]>

  export type UserMeetingSelectScalar = {
    userId?: boolean
    meetingId?: boolean
  }

  export type UserMeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "meetingId", ExtArgs["result"]["userMeeting"]>
  export type UserMeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserMeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMeeting"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      meetingId: string
    }, ExtArgs["result"]["userMeeting"]>
    composites: {}
  }

  type UserMeetingGetPayload<S extends boolean | null | undefined | UserMeetingDefaultArgs> = $Result.GetResult<Prisma.$UserMeetingPayload, S>

  type UserMeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMeetingCountAggregateInputType | true
    }

  export interface UserMeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMeeting'], meta: { name: 'UserMeeting' } }
    /**
     * Find zero or one UserMeeting that matches the filter.
     * @param {UserMeetingFindUniqueArgs} args - Arguments to find a UserMeeting
     * @example
     * // Get one UserMeeting
     * const userMeeting = await prisma.userMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMeetingFindUniqueArgs>(args: SelectSubset<T, UserMeetingFindUniqueArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserMeeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMeetingFindUniqueOrThrowArgs} args - Arguments to find a UserMeeting
     * @example
     * // Get one UserMeeting
     * const userMeeting = await prisma.userMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingFindFirstArgs} args - Arguments to find a UserMeeting
     * @example
     * // Get one UserMeeting
     * const userMeeting = await prisma.userMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMeetingFindFirstArgs>(args?: SelectSubset<T, UserMeetingFindFirstArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserMeeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingFindFirstOrThrowArgs} args - Arguments to find a UserMeeting
     * @example
     * // Get one UserMeeting
     * const userMeeting = await prisma.userMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMeetings
     * const userMeetings = await prisma.userMeeting.findMany()
     * 
     * // Get first 10 UserMeetings
     * const userMeetings = await prisma.userMeeting.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userMeetingWithUserIdOnly = await prisma.userMeeting.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserMeetingFindManyArgs>(args?: SelectSubset<T, UserMeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserMeeting.
     * @param {UserMeetingCreateArgs} args - Arguments to create a UserMeeting.
     * @example
     * // Create one UserMeeting
     * const UserMeeting = await prisma.userMeeting.create({
     *   data: {
     *     // ... data to create a UserMeeting
     *   }
     * })
     * 
     */
    create<T extends UserMeetingCreateArgs>(args: SelectSubset<T, UserMeetingCreateArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserMeetings.
     * @param {UserMeetingCreateManyArgs} args - Arguments to create many UserMeetings.
     * @example
     * // Create many UserMeetings
     * const userMeeting = await prisma.userMeeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMeetingCreateManyArgs>(args?: SelectSubset<T, UserMeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMeetings and returns the data saved in the database.
     * @param {UserMeetingCreateManyAndReturnArgs} args - Arguments to create many UserMeetings.
     * @example
     * // Create many UserMeetings
     * const userMeeting = await prisma.userMeeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMeetings and only return the `userId`
     * const userMeetingWithUserIdOnly = await prisma.userMeeting.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserMeeting.
     * @param {UserMeetingDeleteArgs} args - Arguments to delete one UserMeeting.
     * @example
     * // Delete one UserMeeting
     * const UserMeeting = await prisma.userMeeting.delete({
     *   where: {
     *     // ... filter to delete one UserMeeting
     *   }
     * })
     * 
     */
    delete<T extends UserMeetingDeleteArgs>(args: SelectSubset<T, UserMeetingDeleteArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserMeeting.
     * @param {UserMeetingUpdateArgs} args - Arguments to update one UserMeeting.
     * @example
     * // Update one UserMeeting
     * const userMeeting = await prisma.userMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMeetingUpdateArgs>(args: SelectSubset<T, UserMeetingUpdateArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserMeetings.
     * @param {UserMeetingDeleteManyArgs} args - Arguments to filter UserMeetings to delete.
     * @example
     * // Delete a few UserMeetings
     * const { count } = await prisma.userMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMeetingDeleteManyArgs>(args?: SelectSubset<T, UserMeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMeetings
     * const userMeeting = await prisma.userMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMeetingUpdateManyArgs>(args: SelectSubset<T, UserMeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMeetings and returns the data updated in the database.
     * @param {UserMeetingUpdateManyAndReturnArgs} args - Arguments to update many UserMeetings.
     * @example
     * // Update many UserMeetings
     * const userMeeting = await prisma.userMeeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMeetings and only return the `userId`
     * const userMeetingWithUserIdOnly = await prisma.userMeeting.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserMeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserMeeting.
     * @param {UserMeetingUpsertArgs} args - Arguments to update or create a UserMeeting.
     * @example
     * // Update or create a UserMeeting
     * const userMeeting = await prisma.userMeeting.upsert({
     *   create: {
     *     // ... data to create a UserMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMeeting we want to update
     *   }
     * })
     */
    upsert<T extends UserMeetingUpsertArgs>(args: SelectSubset<T, UserMeetingUpsertArgs<ExtArgs>>): Prisma__UserMeetingClient<$Result.GetResult<Prisma.$UserMeetingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingCountArgs} args - Arguments to filter UserMeetings to count.
     * @example
     * // Count the number of UserMeetings
     * const count = await prisma.userMeeting.count({
     *   where: {
     *     // ... the filter for the UserMeetings we want to count
     *   }
     * })
    **/
    count<T extends UserMeetingCountArgs>(
      args?: Subset<T, UserMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMeetingAggregateArgs>(args: Subset<T, UserMeetingAggregateArgs>): Prisma.PrismaPromise<GetUserMeetingAggregateType<T>>

    /**
     * Group by UserMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMeetingGroupByArgs['orderBy'] }
        : { orderBy?: UserMeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMeeting model
   */
  readonly fields: UserMeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMeeting model
   */ 
  interface UserMeetingFieldRefs {
    readonly userId: FieldRef<"UserMeeting", 'String'>
    readonly meetingId: FieldRef<"UserMeeting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserMeeting findUnique
   */
  export type UserMeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * Filter, which UserMeeting to fetch.
     */
    where: UserMeetingWhereUniqueInput
  }

  /**
   * UserMeeting findUniqueOrThrow
   */
  export type UserMeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * Filter, which UserMeeting to fetch.
     */
    where: UserMeetingWhereUniqueInput
  }

  /**
   * UserMeeting findFirst
   */
  export type UserMeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * Filter, which UserMeeting to fetch.
     */
    where?: UserMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeetings to fetch.
     */
    orderBy?: UserMeetingOrderByWithRelationInput | UserMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMeetings.
     */
    cursor?: UserMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMeetings.
     */
    distinct?: UserMeetingScalarFieldEnum | UserMeetingScalarFieldEnum[]
  }

  /**
   * UserMeeting findFirstOrThrow
   */
  export type UserMeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * Filter, which UserMeeting to fetch.
     */
    where?: UserMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeetings to fetch.
     */
    orderBy?: UserMeetingOrderByWithRelationInput | UserMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMeetings.
     */
    cursor?: UserMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMeetings.
     */
    distinct?: UserMeetingScalarFieldEnum | UserMeetingScalarFieldEnum[]
  }

  /**
   * UserMeeting findMany
   */
  export type UserMeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * Filter, which UserMeetings to fetch.
     */
    where?: UserMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeetings to fetch.
     */
    orderBy?: UserMeetingOrderByWithRelationInput | UserMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMeetings.
     */
    cursor?: UserMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeetings.
     */
    skip?: number
    distinct?: UserMeetingScalarFieldEnum | UserMeetingScalarFieldEnum[]
  }

  /**
   * UserMeeting create
   */
  export type UserMeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMeeting.
     */
    data: XOR<UserMeetingCreateInput, UserMeetingUncheckedCreateInput>
  }

  /**
   * UserMeeting createMany
   */
  export type UserMeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMeetings.
     */
    data: UserMeetingCreateManyInput | UserMeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMeeting createManyAndReturn
   */
  export type UserMeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * The data used to create many UserMeetings.
     */
    data: UserMeetingCreateManyInput | UserMeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMeeting update
   */
  export type UserMeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMeeting.
     */
    data: XOR<UserMeetingUpdateInput, UserMeetingUncheckedUpdateInput>
    /**
     * Choose, which UserMeeting to update.
     */
    where: UserMeetingWhereUniqueInput
  }

  /**
   * UserMeeting updateMany
   */
  export type UserMeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMeetings.
     */
    data: XOR<UserMeetingUpdateManyMutationInput, UserMeetingUncheckedUpdateManyInput>
    /**
     * Filter which UserMeetings to update
     */
    where?: UserMeetingWhereInput
  }

  /**
   * UserMeeting updateManyAndReturn
   */
  export type UserMeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * The data used to update UserMeetings.
     */
    data: XOR<UserMeetingUpdateManyMutationInput, UserMeetingUncheckedUpdateManyInput>
    /**
     * Filter which UserMeetings to update
     */
    where?: UserMeetingWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMeeting upsert
   */
  export type UserMeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMeeting to update in case it exists.
     */
    where: UserMeetingWhereUniqueInput
    /**
     * In case the UserMeeting found by the `where` argument doesn't exist, create a new UserMeeting with this data.
     */
    create: XOR<UserMeetingCreateInput, UserMeetingUncheckedCreateInput>
    /**
     * In case the UserMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMeetingUpdateInput, UserMeetingUncheckedUpdateInput>
  }

  /**
   * UserMeeting delete
   */
  export type UserMeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
    /**
     * Filter which UserMeeting to delete.
     */
    where: UserMeetingWhereUniqueInput
  }

  /**
   * UserMeeting deleteMany
   */
  export type UserMeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMeetings to delete
     */
    where?: UserMeetingWhereInput
  }

  /**
   * UserMeeting without action
   */
  export type UserMeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeeting
     */
    select?: UserMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeeting
     */
    omit?: UserMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    tgName: 'tgName',
    tgId: 'tgId',
    networkingPoints: 'networkingPoints',
    countMeetings: 'countMeetings',
    city: 'city',
    rating: 'rating'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    date: 'date',
    placeId: 'placeId'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    count: 'count'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    address: 'address',
    count: 'count'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const UserMeetingScalarFieldEnum: {
    userId: 'userId',
    meetingId: 'meetingId'
  };

  export type UserMeetingScalarFieldEnum = (typeof UserMeetingScalarFieldEnum)[keyof typeof UserMeetingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    tgName?: StringFilter<"User"> | string
    tgId?: StringFilter<"User"> | string
    networkingPoints?: IntFilter<"User"> | number
    countMeetings?: IntFilter<"User"> | number
    city?: StringFilter<"User"> | string
    rating?: IntFilter<"User"> | number
    meetings?: UserMeetingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    tgName?: SortOrder
    tgId?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    city?: SortOrder
    rating?: SortOrder
    meetings?: UserMeetingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    tgName?: StringFilter<"User"> | string
    tgId?: StringFilter<"User"> | string
    networkingPoints?: IntFilter<"User"> | number
    countMeetings?: IntFilter<"User"> | number
    city?: StringFilter<"User"> | string
    rating?: IntFilter<"User"> | number
    meetings?: UserMeetingListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    tgName?: SortOrder
    tgId?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    city?: SortOrder
    rating?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    tgName?: StringWithAggregatesFilter<"User"> | string
    tgId?: StringWithAggregatesFilter<"User"> | string
    networkingPoints?: IntWithAggregatesFilter<"User"> | number
    countMeetings?: IntWithAggregatesFilter<"User"> | number
    city?: StringWithAggregatesFilter<"User"> | string
    rating?: IntWithAggregatesFilter<"User"> | number
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    title?: StringFilter<"Meeting"> | string
    date?: DateTimeFilter<"Meeting"> | Date | string
    placeId?: StringFilter<"Meeting"> | string
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
    users?: UserMeetingListRelationFilter
    topics?: TopicListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    date?: SortOrder
    placeId?: SortOrder
    place?: PlaceOrderByWithRelationInput
    users?: UserMeetingOrderByRelationAggregateInput
    topics?: TopicOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    title?: StringFilter<"Meeting"> | string
    date?: DateTimeFilter<"Meeting"> | Date | string
    placeId?: StringFilter<"Meeting"> | string
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
    users?: UserMeetingListRelationFilter
    topics?: TopicListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    date?: SortOrder
    placeId?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    title?: StringWithAggregatesFilter<"Meeting"> | string
    date?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    placeId?: StringWithAggregatesFilter<"Meeting"> | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    title?: StringFilter<"Topic"> | string
    count?: IntFilter<"Topic"> | number
    meetings?: MeetingListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    count?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    title?: StringFilter<"Topic"> | string
    count?: IntFilter<"Topic"> | number
    meetings?: MeetingListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    count?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    title?: StringWithAggregatesFilter<"Topic"> | string
    count?: IntWithAggregatesFilter<"Topic"> | number
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: StringFilter<"Place"> | string
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    name?: StringFilter<"Place"> | string
    address?: StringFilter<"Place"> | string
    count?: IntFilter<"Place"> | number
    meetings?: MeetingListRelationFilter
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    count?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    name?: StringFilter<"Place"> | string
    address?: StringFilter<"Place"> | string
    count?: IntFilter<"Place"> | number
    meetings?: MeetingListRelationFilter
  }, "id">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    count?: SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _avg?: PlaceAvgOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
    _sum?: PlaceSumOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Place"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    name?: StringWithAggregatesFilter<"Place"> | string
    address?: StringWithAggregatesFilter<"Place"> | string
    count?: IntWithAggregatesFilter<"Place"> | number
  }

  export type UserMeetingWhereInput = {
    AND?: UserMeetingWhereInput | UserMeetingWhereInput[]
    OR?: UserMeetingWhereInput[]
    NOT?: UserMeetingWhereInput | UserMeetingWhereInput[]
    userId?: StringFilter<"UserMeeting"> | string
    meetingId?: StringFilter<"UserMeeting"> | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserMeetingOrderByWithRelationInput = {
    userId?: SortOrder
    meetingId?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserMeetingWhereUniqueInput = Prisma.AtLeast<{
    userId_meetingId?: UserMeetingUserIdMeetingIdCompoundUniqueInput
    AND?: UserMeetingWhereInput | UserMeetingWhereInput[]
    OR?: UserMeetingWhereInput[]
    NOT?: UserMeetingWhereInput | UserMeetingWhereInput[]
    userId?: StringFilter<"UserMeeting"> | string
    meetingId?: StringFilter<"UserMeeting"> | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_meetingId">

  export type UserMeetingOrderByWithAggregationInput = {
    userId?: SortOrder
    meetingId?: SortOrder
    _count?: UserMeetingCountOrderByAggregateInput
    _max?: UserMeetingMaxOrderByAggregateInput
    _min?: UserMeetingMinOrderByAggregateInput
  }

  export type UserMeetingScalarWhereWithAggregatesInput = {
    AND?: UserMeetingScalarWhereWithAggregatesInput | UserMeetingScalarWhereWithAggregatesInput[]
    OR?: UserMeetingScalarWhereWithAggregatesInput[]
    NOT?: UserMeetingScalarWhereWithAggregatesInput | UserMeetingScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserMeeting"> | string
    meetingId?: StringWithAggregatesFilter<"UserMeeting"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    age: number
    tgName: string
    tgId: string
    networkingPoints?: number
    countMeetings?: number
    city: string
    rating?: number
    meetings?: UserMeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    age: number
    tgName: string
    tgId: string
    networkingPoints?: number
    countMeetings?: number
    city: string
    rating?: number
    meetings?: UserMeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    tgName?: StringFieldUpdateOperationsInput | string
    tgId?: StringFieldUpdateOperationsInput | string
    networkingPoints?: IntFieldUpdateOperationsInput | number
    countMeetings?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    meetings?: UserMeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    tgName?: StringFieldUpdateOperationsInput | string
    tgId?: StringFieldUpdateOperationsInput | string
    networkingPoints?: IntFieldUpdateOperationsInput | number
    countMeetings?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    meetings?: UserMeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    age: number
    tgName: string
    tgId: string
    networkingPoints?: number
    countMeetings?: number
    city: string
    rating?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    tgName?: StringFieldUpdateOperationsInput | string
    tgId?: StringFieldUpdateOperationsInput | string
    networkingPoints?: IntFieldUpdateOperationsInput | number
    countMeetings?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    tgName?: StringFieldUpdateOperationsInput | string
    tgId?: StringFieldUpdateOperationsInput | string
    networkingPoints?: IntFieldUpdateOperationsInput | number
    countMeetings?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    place: PlaceCreateNestedOneWithoutMeetingsInput
    users?: UserMeetingCreateNestedManyWithoutMeetingInput
    topics?: TopicCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    placeId: string
    users?: UserMeetingUncheckedCreateNestedManyWithoutMeetingInput
    topics?: TopicUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneRequiredWithoutMeetingsNestedInput
    users?: UserMeetingUpdateManyWithoutMeetingNestedInput
    topics?: TopicUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: StringFieldUpdateOperationsInput | string
    users?: UserMeetingUncheckedUpdateManyWithoutMeetingNestedInput
    topics?: TopicUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    placeId: string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    count: number
    meetings?: MeetingCreateNestedManyWithoutTopicsInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    count: number
    meetings?: MeetingUncheckedCreateNestedManyWithoutTopicsInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    meetings?: MeetingUpdateManyWithoutTopicsNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    meetings?: MeetingUncheckedUpdateManyWithoutTopicsNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    count: number
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PlaceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    count: number
    meetings?: MeetingCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    count: number
    meetings?: MeetingUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    meetings?: MeetingUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    meetings?: MeetingUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    count: number
  }

  export type PlaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserMeetingCreateInput = {
    meeting: MeetingCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutMeetingsInput
  }

  export type UserMeetingUncheckedCreateInput = {
    userId: string
    meetingId: string
  }

  export type UserMeetingUpdateInput = {
    meeting?: MeetingUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type UserMeetingUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMeetingCreateManyInput = {
    userId: string
    meetingId: string
  }

  export type UserMeetingUpdateManyMutationInput = {

  }

  export type UserMeetingUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserMeetingListRelationFilter = {
    every?: UserMeetingWhereInput
    some?: UserMeetingWhereInput
    none?: UserMeetingWhereInput
  }

  export type UserMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    tgName?: SortOrder
    tgId?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    city?: SortOrder
    rating?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    tgName?: SortOrder
    tgId?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    city?: SortOrder
    rating?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    tgName?: SortOrder
    tgId?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    city?: SortOrder
    rating?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    networkingPoints?: SortOrder
    countMeetings?: SortOrder
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlaceScalarRelationFilter = {
    is?: PlaceWhereInput
    isNot?: PlaceWhereInput
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    date?: SortOrder
    placeId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    date?: SortOrder
    placeId?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    date?: SortOrder
    placeId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    count?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    count?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    count?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    count?: SortOrder
  }

  export type PlaceAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    count?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    count?: SortOrder
  }

  export type PlaceSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserMeetingUserIdMeetingIdCompoundUniqueInput = {
    userId: string
    meetingId: string
  }

  export type UserMeetingCountOrderByAggregateInput = {
    userId?: SortOrder
    meetingId?: SortOrder
  }

  export type UserMeetingMaxOrderByAggregateInput = {
    userId?: SortOrder
    meetingId?: SortOrder
  }

  export type UserMeetingMinOrderByAggregateInput = {
    userId?: SortOrder
    meetingId?: SortOrder
  }

  export type UserMeetingCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMeetingCreateWithoutUserInput, UserMeetingUncheckedCreateWithoutUserInput> | UserMeetingCreateWithoutUserInput[] | UserMeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutUserInput | UserMeetingCreateOrConnectWithoutUserInput[]
    createMany?: UserMeetingCreateManyUserInputEnvelope
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
  }

  export type UserMeetingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMeetingCreateWithoutUserInput, UserMeetingUncheckedCreateWithoutUserInput> | UserMeetingCreateWithoutUserInput[] | UserMeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutUserInput | UserMeetingCreateOrConnectWithoutUserInput[]
    createMany?: UserMeetingCreateManyUserInputEnvelope
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserMeetingUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMeetingCreateWithoutUserInput, UserMeetingUncheckedCreateWithoutUserInput> | UserMeetingCreateWithoutUserInput[] | UserMeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutUserInput | UserMeetingCreateOrConnectWithoutUserInput[]
    upsert?: UserMeetingUpsertWithWhereUniqueWithoutUserInput | UserMeetingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMeetingCreateManyUserInputEnvelope
    set?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    disconnect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    delete?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    update?: UserMeetingUpdateWithWhereUniqueWithoutUserInput | UserMeetingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMeetingUpdateManyWithWhereWithoutUserInput | UserMeetingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMeetingScalarWhereInput | UserMeetingScalarWhereInput[]
  }

  export type UserMeetingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMeetingCreateWithoutUserInput, UserMeetingUncheckedCreateWithoutUserInput> | UserMeetingCreateWithoutUserInput[] | UserMeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutUserInput | UserMeetingCreateOrConnectWithoutUserInput[]
    upsert?: UserMeetingUpsertWithWhereUniqueWithoutUserInput | UserMeetingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMeetingCreateManyUserInputEnvelope
    set?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    disconnect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    delete?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    update?: UserMeetingUpdateWithWhereUniqueWithoutUserInput | UserMeetingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMeetingUpdateManyWithWhereWithoutUserInput | UserMeetingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMeetingScalarWhereInput | UserMeetingScalarWhereInput[]
  }

  export type PlaceCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<PlaceCreateWithoutMeetingsInput, PlaceUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutMeetingsInput
    connect?: PlaceWhereUniqueInput
  }

  export type UserMeetingCreateNestedManyWithoutMeetingInput = {
    create?: XOR<UserMeetingCreateWithoutMeetingInput, UserMeetingUncheckedCreateWithoutMeetingInput> | UserMeetingCreateWithoutMeetingInput[] | UserMeetingUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutMeetingInput | UserMeetingCreateOrConnectWithoutMeetingInput[]
    createMany?: UserMeetingCreateManyMeetingInputEnvelope
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
  }

  export type TopicCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<TopicCreateWithoutMeetingsInput, TopicUncheckedCreateWithoutMeetingsInput> | TopicCreateWithoutMeetingsInput[] | TopicUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutMeetingsInput | TopicCreateOrConnectWithoutMeetingsInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type UserMeetingUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<UserMeetingCreateWithoutMeetingInput, UserMeetingUncheckedCreateWithoutMeetingInput> | UserMeetingCreateWithoutMeetingInput[] | UserMeetingUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutMeetingInput | UserMeetingCreateOrConnectWithoutMeetingInput[]
    createMany?: UserMeetingCreateManyMeetingInputEnvelope
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<TopicCreateWithoutMeetingsInput, TopicUncheckedCreateWithoutMeetingsInput> | TopicCreateWithoutMeetingsInput[] | TopicUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutMeetingsInput | TopicCreateOrConnectWithoutMeetingsInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlaceUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<PlaceCreateWithoutMeetingsInput, PlaceUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutMeetingsInput
    upsert?: PlaceUpsertWithoutMeetingsInput
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutMeetingsInput, PlaceUpdateWithoutMeetingsInput>, PlaceUncheckedUpdateWithoutMeetingsInput>
  }

  export type UserMeetingUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<UserMeetingCreateWithoutMeetingInput, UserMeetingUncheckedCreateWithoutMeetingInput> | UserMeetingCreateWithoutMeetingInput[] | UserMeetingUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutMeetingInput | UserMeetingCreateOrConnectWithoutMeetingInput[]
    upsert?: UserMeetingUpsertWithWhereUniqueWithoutMeetingInput | UserMeetingUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: UserMeetingCreateManyMeetingInputEnvelope
    set?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    disconnect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    delete?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    update?: UserMeetingUpdateWithWhereUniqueWithoutMeetingInput | UserMeetingUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: UserMeetingUpdateManyWithWhereWithoutMeetingInput | UserMeetingUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: UserMeetingScalarWhereInput | UserMeetingScalarWhereInput[]
  }

  export type TopicUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<TopicCreateWithoutMeetingsInput, TopicUncheckedCreateWithoutMeetingsInput> | TopicCreateWithoutMeetingsInput[] | TopicUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutMeetingsInput | TopicCreateOrConnectWithoutMeetingsInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutMeetingsInput | TopicUpsertWithWhereUniqueWithoutMeetingsInput[]
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutMeetingsInput | TopicUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutMeetingsInput | TopicUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type UserMeetingUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<UserMeetingCreateWithoutMeetingInput, UserMeetingUncheckedCreateWithoutMeetingInput> | UserMeetingCreateWithoutMeetingInput[] | UserMeetingUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: UserMeetingCreateOrConnectWithoutMeetingInput | UserMeetingCreateOrConnectWithoutMeetingInput[]
    upsert?: UserMeetingUpsertWithWhereUniqueWithoutMeetingInput | UserMeetingUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: UserMeetingCreateManyMeetingInputEnvelope
    set?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    disconnect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    delete?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    connect?: UserMeetingWhereUniqueInput | UserMeetingWhereUniqueInput[]
    update?: UserMeetingUpdateWithWhereUniqueWithoutMeetingInput | UserMeetingUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: UserMeetingUpdateManyWithWhereWithoutMeetingInput | UserMeetingUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: UserMeetingScalarWhereInput | UserMeetingScalarWhereInput[]
  }

  export type TopicUncheckedUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<TopicCreateWithoutMeetingsInput, TopicUncheckedCreateWithoutMeetingsInput> | TopicCreateWithoutMeetingsInput[] | TopicUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutMeetingsInput | TopicCreateOrConnectWithoutMeetingsInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutMeetingsInput | TopicUpsertWithWhereUniqueWithoutMeetingsInput[]
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutMeetingsInput | TopicUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutMeetingsInput | TopicUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type MeetingCreateNestedManyWithoutTopicsInput = {
    create?: XOR<MeetingCreateWithoutTopicsInput, MeetingUncheckedCreateWithoutTopicsInput> | MeetingCreateWithoutTopicsInput[] | MeetingUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTopicsInput | MeetingCreateOrConnectWithoutTopicsInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutTopicsInput = {
    create?: XOR<MeetingCreateWithoutTopicsInput, MeetingUncheckedCreateWithoutTopicsInput> | MeetingCreateWithoutTopicsInput[] | MeetingUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTopicsInput | MeetingCreateOrConnectWithoutTopicsInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUpdateManyWithoutTopicsNestedInput = {
    create?: XOR<MeetingCreateWithoutTopicsInput, MeetingUncheckedCreateWithoutTopicsInput> | MeetingCreateWithoutTopicsInput[] | MeetingUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTopicsInput | MeetingCreateOrConnectWithoutTopicsInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutTopicsInput | MeetingUpsertWithWhereUniqueWithoutTopicsInput[]
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutTopicsInput | MeetingUpdateWithWhereUniqueWithoutTopicsInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutTopicsInput | MeetingUpdateManyWithWhereWithoutTopicsInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutTopicsNestedInput = {
    create?: XOR<MeetingCreateWithoutTopicsInput, MeetingUncheckedCreateWithoutTopicsInput> | MeetingCreateWithoutTopicsInput[] | MeetingUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTopicsInput | MeetingCreateOrConnectWithoutTopicsInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutTopicsInput | MeetingUpsertWithWhereUniqueWithoutTopicsInput[]
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutTopicsInput | MeetingUpdateWithWhereUniqueWithoutTopicsInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutTopicsInput | MeetingUpdateManyWithWhereWithoutTopicsInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingCreateNestedManyWithoutPlaceInput = {
    create?: XOR<MeetingCreateWithoutPlaceInput, MeetingUncheckedCreateWithoutPlaceInput> | MeetingCreateWithoutPlaceInput[] | MeetingUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutPlaceInput | MeetingCreateOrConnectWithoutPlaceInput[]
    createMany?: MeetingCreateManyPlaceInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<MeetingCreateWithoutPlaceInput, MeetingUncheckedCreateWithoutPlaceInput> | MeetingCreateWithoutPlaceInput[] | MeetingUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutPlaceInput | MeetingCreateOrConnectWithoutPlaceInput[]
    createMany?: MeetingCreateManyPlaceInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<MeetingCreateWithoutPlaceInput, MeetingUncheckedCreateWithoutPlaceInput> | MeetingCreateWithoutPlaceInput[] | MeetingUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutPlaceInput | MeetingCreateOrConnectWithoutPlaceInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutPlaceInput | MeetingUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: MeetingCreateManyPlaceInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutPlaceInput | MeetingUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutPlaceInput | MeetingUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<MeetingCreateWithoutPlaceInput, MeetingUncheckedCreateWithoutPlaceInput> | MeetingCreateWithoutPlaceInput[] | MeetingUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutPlaceInput | MeetingCreateOrConnectWithoutPlaceInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutPlaceInput | MeetingUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: MeetingCreateManyPlaceInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutPlaceInput | MeetingUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutPlaceInput | MeetingUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingCreateNestedOneWithoutUsersInput = {
    create?: XOR<MeetingCreateWithoutUsersInput, MeetingUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutUsersInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<MeetingCreateWithoutUsersInput, MeetingUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutUsersInput
    upsert?: MeetingUpsertWithoutUsersInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutUsersInput, MeetingUpdateWithoutUsersInput>, MeetingUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingsInput
    upsert?: UserUpsertWithoutMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingsInput, UserUpdateWithoutMeetingsInput>, UserUncheckedUpdateWithoutMeetingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserMeetingCreateWithoutUserInput = {
    meeting: MeetingCreateNestedOneWithoutUsersInput
  }

  export type UserMeetingUncheckedCreateWithoutUserInput = {
    meetingId: string
  }

  export type UserMeetingCreateOrConnectWithoutUserInput = {
    where: UserMeetingWhereUniqueInput
    create: XOR<UserMeetingCreateWithoutUserInput, UserMeetingUncheckedCreateWithoutUserInput>
  }

  export type UserMeetingCreateManyUserInputEnvelope = {
    data: UserMeetingCreateManyUserInput | UserMeetingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMeetingUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMeetingWhereUniqueInput
    update: XOR<UserMeetingUpdateWithoutUserInput, UserMeetingUncheckedUpdateWithoutUserInput>
    create: XOR<UserMeetingCreateWithoutUserInput, UserMeetingUncheckedCreateWithoutUserInput>
  }

  export type UserMeetingUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMeetingWhereUniqueInput
    data: XOR<UserMeetingUpdateWithoutUserInput, UserMeetingUncheckedUpdateWithoutUserInput>
  }

  export type UserMeetingUpdateManyWithWhereWithoutUserInput = {
    where: UserMeetingScalarWhereInput
    data: XOR<UserMeetingUpdateManyMutationInput, UserMeetingUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMeetingScalarWhereInput = {
    AND?: UserMeetingScalarWhereInput | UserMeetingScalarWhereInput[]
    OR?: UserMeetingScalarWhereInput[]
    NOT?: UserMeetingScalarWhereInput | UserMeetingScalarWhereInput[]
    userId?: StringFilter<"UserMeeting"> | string
    meetingId?: StringFilter<"UserMeeting"> | string
  }

  export type PlaceCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    count: number
  }

  export type PlaceUncheckedCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    count: number
  }

  export type PlaceCreateOrConnectWithoutMeetingsInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutMeetingsInput, PlaceUncheckedCreateWithoutMeetingsInput>
  }

  export type UserMeetingCreateWithoutMeetingInput = {
    user: UserCreateNestedOneWithoutMeetingsInput
  }

  export type UserMeetingUncheckedCreateWithoutMeetingInput = {
    userId: string
  }

  export type UserMeetingCreateOrConnectWithoutMeetingInput = {
    where: UserMeetingWhereUniqueInput
    create: XOR<UserMeetingCreateWithoutMeetingInput, UserMeetingUncheckedCreateWithoutMeetingInput>
  }

  export type UserMeetingCreateManyMeetingInputEnvelope = {
    data: UserMeetingCreateManyMeetingInput | UserMeetingCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type TopicCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    count: number
  }

  export type TopicUncheckedCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    count: number
  }

  export type TopicCreateOrConnectWithoutMeetingsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutMeetingsInput, TopicUncheckedCreateWithoutMeetingsInput>
  }

  export type PlaceUpsertWithoutMeetingsInput = {
    update: XOR<PlaceUpdateWithoutMeetingsInput, PlaceUncheckedUpdateWithoutMeetingsInput>
    create: XOR<PlaceCreateWithoutMeetingsInput, PlaceUncheckedCreateWithoutMeetingsInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutMeetingsInput, PlaceUncheckedUpdateWithoutMeetingsInput>
  }

  export type PlaceUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PlaceUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserMeetingUpsertWithWhereUniqueWithoutMeetingInput = {
    where: UserMeetingWhereUniqueInput
    update: XOR<UserMeetingUpdateWithoutMeetingInput, UserMeetingUncheckedUpdateWithoutMeetingInput>
    create: XOR<UserMeetingCreateWithoutMeetingInput, UserMeetingUncheckedCreateWithoutMeetingInput>
  }

  export type UserMeetingUpdateWithWhereUniqueWithoutMeetingInput = {
    where: UserMeetingWhereUniqueInput
    data: XOR<UserMeetingUpdateWithoutMeetingInput, UserMeetingUncheckedUpdateWithoutMeetingInput>
  }

  export type UserMeetingUpdateManyWithWhereWithoutMeetingInput = {
    where: UserMeetingScalarWhereInput
    data: XOR<UserMeetingUpdateManyMutationInput, UserMeetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type TopicUpsertWithWhereUniqueWithoutMeetingsInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutMeetingsInput, TopicUncheckedUpdateWithoutMeetingsInput>
    create: XOR<TopicCreateWithoutMeetingsInput, TopicUncheckedCreateWithoutMeetingsInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutMeetingsInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutMeetingsInput, TopicUncheckedUpdateWithoutMeetingsInput>
  }

  export type TopicUpdateManyWithWhereWithoutMeetingsInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutMeetingsInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    title?: StringFilter<"Topic"> | string
    count?: IntFilter<"Topic"> | number
  }

  export type MeetingCreateWithoutTopicsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    place: PlaceCreateNestedOneWithoutMeetingsInput
    users?: UserMeetingCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutTopicsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    placeId: string
    users?: UserMeetingUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutTopicsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutTopicsInput, MeetingUncheckedCreateWithoutTopicsInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutTopicsInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutTopicsInput, MeetingUncheckedUpdateWithoutTopicsInput>
    create: XOR<MeetingCreateWithoutTopicsInput, MeetingUncheckedCreateWithoutTopicsInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutTopicsInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutTopicsInput, MeetingUncheckedUpdateWithoutTopicsInput>
  }

  export type MeetingUpdateManyWithWhereWithoutTopicsInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutTopicsInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    title?: StringFilter<"Meeting"> | string
    date?: DateTimeFilter<"Meeting"> | Date | string
    placeId?: StringFilter<"Meeting"> | string
  }

  export type MeetingCreateWithoutPlaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    users?: UserMeetingCreateNestedManyWithoutMeetingInput
    topics?: TopicCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutPlaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    users?: UserMeetingUncheckedCreateNestedManyWithoutMeetingInput
    topics?: TopicUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingCreateOrConnectWithoutPlaceInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutPlaceInput, MeetingUncheckedCreateWithoutPlaceInput>
  }

  export type MeetingCreateManyPlaceInputEnvelope = {
    data: MeetingCreateManyPlaceInput | MeetingCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutPlaceInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutPlaceInput, MeetingUncheckedUpdateWithoutPlaceInput>
    create: XOR<MeetingCreateWithoutPlaceInput, MeetingUncheckedCreateWithoutPlaceInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutPlaceInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutPlaceInput, MeetingUncheckedUpdateWithoutPlaceInput>
  }

  export type MeetingUpdateManyWithWhereWithoutPlaceInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutPlaceInput>
  }

  export type MeetingCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    place: PlaceCreateNestedOneWithoutMeetingsInput
    topics?: TopicCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
    placeId: string
    topics?: TopicUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingCreateOrConnectWithoutUsersInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutUsersInput, MeetingUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutMeetingsInput = {
    id?: string
    name: string
    age: number
    tgName: string
    tgId: string
    networkingPoints?: number
    countMeetings?: number
    city: string
    rating?: number
  }

  export type UserUncheckedCreateWithoutMeetingsInput = {
    id?: string
    name: string
    age: number
    tgName: string
    tgId: string
    networkingPoints?: number
    countMeetings?: number
    city: string
    rating?: number
  }

  export type UserCreateOrConnectWithoutMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
  }

  export type MeetingUpsertWithoutUsersInput = {
    update: XOR<MeetingUpdateWithoutUsersInput, MeetingUncheckedUpdateWithoutUsersInput>
    create: XOR<MeetingCreateWithoutUsersInput, MeetingUncheckedCreateWithoutUsersInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutUsersInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutUsersInput, MeetingUncheckedUpdateWithoutUsersInput>
  }

  export type MeetingUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneRequiredWithoutMeetingsNestedInput
    topics?: TopicUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: StringFieldUpdateOperationsInput | string
    topics?: TopicUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type UserUpsertWithoutMeetingsInput = {
    update: XOR<UserUpdateWithoutMeetingsInput, UserUncheckedUpdateWithoutMeetingsInput>
    create: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingsInput, UserUncheckedUpdateWithoutMeetingsInput>
  }

  export type UserUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    tgName?: StringFieldUpdateOperationsInput | string
    tgId?: StringFieldUpdateOperationsInput | string
    networkingPoints?: IntFieldUpdateOperationsInput | number
    countMeetings?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    tgName?: StringFieldUpdateOperationsInput | string
    tgId?: StringFieldUpdateOperationsInput | string
    networkingPoints?: IntFieldUpdateOperationsInput | number
    countMeetings?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type UserMeetingCreateManyUserInput = {
    meetingId: string
  }

  export type UserMeetingUpdateWithoutUserInput = {
    meeting?: MeetingUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserMeetingUncheckedUpdateWithoutUserInput = {
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMeetingUncheckedUpdateManyWithoutUserInput = {
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMeetingCreateManyMeetingInput = {
    userId: string
  }

  export type UserMeetingUpdateWithoutMeetingInput = {
    user?: UserUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type UserMeetingUncheckedUpdateWithoutMeetingInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMeetingUncheckedUpdateManyWithoutMeetingInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TopicUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TopicUncheckedUpdateManyWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneRequiredWithoutMeetingsNestedInput
    users?: UserMeetingUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: StringFieldUpdateOperationsInput | string
    users?: UserMeetingUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateManyPlaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    date: Date | string
  }

  export type MeetingUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserMeetingUpdateManyWithoutMeetingNestedInput
    topics?: TopicUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserMeetingUncheckedUpdateManyWithoutMeetingNestedInput
    topics?: TopicUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}