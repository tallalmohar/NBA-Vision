
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
 * Model player_stats
 * 
 */
export type player_stats = $Result.DefaultSelection<Prisma.$player_statsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Player_stats
 * const player_stats = await prisma.player_stats.findMany()
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
   * // Fetch zero or more Player_stats
   * const player_stats = await prisma.player_stats.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.player_stats`: Exposes CRUD operations for the **player_stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_stats
    * const player_stats = await prisma.player_stats.findMany()
    * ```
    */
  get player_stats(): Prisma.player_statsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    player_stats: 'player_stats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "player_stats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      player_stats: {
        payload: Prisma.$player_statsPayload<ExtArgs>
        fields: Prisma.player_statsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.player_statsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.player_statsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          findFirst: {
            args: Prisma.player_statsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.player_statsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          findMany: {
            args: Prisma.player_statsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>[]
          }
          create: {
            args: Prisma.player_statsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          createMany: {
            args: Prisma.player_statsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.player_statsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>[]
          }
          delete: {
            args: Prisma.player_statsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          update: {
            args: Prisma.player_statsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          deleteMany: {
            args: Prisma.player_statsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.player_statsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.player_statsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>[]
          }
          upsert: {
            args: Prisma.player_statsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          aggregate: {
            args: Prisma.Player_statsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_stats>
          }
          groupBy: {
            args: Prisma.player_statsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_statsGroupByOutputType>[]
          }
          count: {
            args: Prisma.player_statsCountArgs<ExtArgs>
            result: $Utils.Optional<Player_statsCountAggregateOutputType> | number
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
    player_stats?: player_statsOmit
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
   * Models
   */

  /**
   * Model player_stats
   */

  export type AggregatePlayer_stats = {
    _count: Player_statsCountAggregateOutputType | null
    _avg: Player_statsAvgAggregateOutputType | null
    _sum: Player_statsSumAggregateOutputType | null
    _min: Player_statsMinAggregateOutputType | null
    _max: Player_statsMaxAggregateOutputType | null
  }

  export type Player_statsAvgAggregateOutputType = {
    id: number | null
    total_points: number | null
    total_rebounds: number | null
    total_assists: number | null
    total_steals: number | null
    total_blocks: number | null
    total_turnovers: number | null
  }

  export type Player_statsSumAggregateOutputType = {
    id: bigint | null
    total_points: number | null
    total_rebounds: number | null
    total_assists: number | null
    total_steals: number | null
    total_blocks: number | null
    total_turnovers: number | null
  }

  export type Player_statsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    player_id: string | null
    age: string | null
    team: string | null
    position: string | null
    total_points: number | null
    total_rebounds: number | null
    total_assists: number | null
    total_steals: number | null
    total_blocks: number | null
    total_turnovers: number | null
    headshot_url: string | null
  }

  export type Player_statsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    player_id: string | null
    age: string | null
    team: string | null
    position: string | null
    total_points: number | null
    total_rebounds: number | null
    total_assists: number | null
    total_steals: number | null
    total_blocks: number | null
    total_turnovers: number | null
    headshot_url: string | null
  }

  export type Player_statsCountAggregateOutputType = {
    id: number
    name: number
    player_id: number
    age: number
    team: number
    position: number
    total_points: number
    total_rebounds: number
    total_assists: number
    total_steals: number
    total_blocks: number
    total_turnovers: number
    headshot_url: number
    _all: number
  }


  export type Player_statsAvgAggregateInputType = {
    id?: true
    total_points?: true
    total_rebounds?: true
    total_assists?: true
    total_steals?: true
    total_blocks?: true
    total_turnovers?: true
  }

  export type Player_statsSumAggregateInputType = {
    id?: true
    total_points?: true
    total_rebounds?: true
    total_assists?: true
    total_steals?: true
    total_blocks?: true
    total_turnovers?: true
  }

  export type Player_statsMinAggregateInputType = {
    id?: true
    name?: true
    player_id?: true
    age?: true
    team?: true
    position?: true
    total_points?: true
    total_rebounds?: true
    total_assists?: true
    total_steals?: true
    total_blocks?: true
    total_turnovers?: true
    headshot_url?: true
  }

  export type Player_statsMaxAggregateInputType = {
    id?: true
    name?: true
    player_id?: true
    age?: true
    team?: true
    position?: true
    total_points?: true
    total_rebounds?: true
    total_assists?: true
    total_steals?: true
    total_blocks?: true
    total_turnovers?: true
    headshot_url?: true
  }

  export type Player_statsCountAggregateInputType = {
    id?: true
    name?: true
    player_id?: true
    age?: true
    team?: true
    position?: true
    total_points?: true
    total_rebounds?: true
    total_assists?: true
    total_steals?: true
    total_blocks?: true
    total_turnovers?: true
    headshot_url?: true
    _all?: true
  }

  export type Player_statsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_stats to aggregate.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned player_stats
    **/
    _count?: true | Player_statsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Player_statsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Player_statsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_statsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_statsMaxAggregateInputType
  }

  export type GetPlayer_statsAggregateType<T extends Player_statsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_stats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_stats[P]>
      : GetScalarType<T[P], AggregatePlayer_stats[P]>
  }




  export type player_statsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_statsWhereInput
    orderBy?: player_statsOrderByWithAggregationInput | player_statsOrderByWithAggregationInput[]
    by: Player_statsScalarFieldEnum[] | Player_statsScalarFieldEnum
    having?: player_statsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_statsCountAggregateInputType | true
    _avg?: Player_statsAvgAggregateInputType
    _sum?: Player_statsSumAggregateInputType
    _min?: Player_statsMinAggregateInputType
    _max?: Player_statsMaxAggregateInputType
  }

  export type Player_statsGroupByOutputType = {
    id: bigint
    name: string | null
    player_id: string | null
    age: string | null
    team: string | null
    position: string | null
    total_points: number | null
    total_rebounds: number | null
    total_assists: number | null
    total_steals: number | null
    total_blocks: number | null
    total_turnovers: number | null
    headshot_url: string | null
    _count: Player_statsCountAggregateOutputType | null
    _avg: Player_statsAvgAggregateOutputType | null
    _sum: Player_statsSumAggregateOutputType | null
    _min: Player_statsMinAggregateOutputType | null
    _max: Player_statsMaxAggregateOutputType | null
  }

  type GetPlayer_statsGroupByPayload<T extends player_statsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_statsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_statsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_statsGroupByOutputType[P]>
            : GetScalarType<T[P], Player_statsGroupByOutputType[P]>
        }
      >
    >


  export type player_statsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    player_id?: boolean
    age?: boolean
    team?: boolean
    position?: boolean
    total_points?: boolean
    total_rebounds?: boolean
    total_assists?: boolean
    total_steals?: boolean
    total_blocks?: boolean
    total_turnovers?: boolean
    headshot_url?: boolean
  }, ExtArgs["result"]["player_stats"]>

  export type player_statsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    player_id?: boolean
    age?: boolean
    team?: boolean
    position?: boolean
    total_points?: boolean
    total_rebounds?: boolean
    total_assists?: boolean
    total_steals?: boolean
    total_blocks?: boolean
    total_turnovers?: boolean
    headshot_url?: boolean
  }, ExtArgs["result"]["player_stats"]>

  export type player_statsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    player_id?: boolean
    age?: boolean
    team?: boolean
    position?: boolean
    total_points?: boolean
    total_rebounds?: boolean
    total_assists?: boolean
    total_steals?: boolean
    total_blocks?: boolean
    total_turnovers?: boolean
    headshot_url?: boolean
  }, ExtArgs["result"]["player_stats"]>

  export type player_statsSelectScalar = {
    id?: boolean
    name?: boolean
    player_id?: boolean
    age?: boolean
    team?: boolean
    position?: boolean
    total_points?: boolean
    total_rebounds?: boolean
    total_assists?: boolean
    total_steals?: boolean
    total_blocks?: boolean
    total_turnovers?: boolean
    headshot_url?: boolean
  }

  export type player_statsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "player_id" | "age" | "team" | "position" | "total_points" | "total_rebounds" | "total_assists" | "total_steals" | "total_blocks" | "total_turnovers" | "headshot_url", ExtArgs["result"]["player_stats"]>

  export type $player_statsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player_stats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      player_id: string | null
      age: string | null
      team: string | null
      position: string | null
      total_points: number | null
      total_rebounds: number | null
      total_assists: number | null
      total_steals: number | null
      total_blocks: number | null
      total_turnovers: number | null
      headshot_url: string | null
    }, ExtArgs["result"]["player_stats"]>
    composites: {}
  }

  type player_statsGetPayload<S extends boolean | null | undefined | player_statsDefaultArgs> = $Result.GetResult<Prisma.$player_statsPayload, S>

  type player_statsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<player_statsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Player_statsCountAggregateInputType | true
    }

  export interface player_statsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player_stats'], meta: { name: 'player_stats' } }
    /**
     * Find zero or one Player_stats that matches the filter.
     * @param {player_statsFindUniqueArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends player_statsFindUniqueArgs>(args: SelectSubset<T, player_statsFindUniqueArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player_stats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {player_statsFindUniqueOrThrowArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends player_statsFindUniqueOrThrowArgs>(args: SelectSubset<T, player_statsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsFindFirstArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends player_statsFindFirstArgs>(args?: SelectSubset<T, player_statsFindFirstArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsFindFirstOrThrowArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends player_statsFindFirstOrThrowArgs>(args?: SelectSubset<T, player_statsFindFirstOrThrowArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Player_stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_stats
     * const player_stats = await prisma.player_stats.findMany()
     * 
     * // Get first 10 Player_stats
     * const player_stats = await prisma.player_stats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const player_statsWithIdOnly = await prisma.player_stats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends player_statsFindManyArgs>(args?: SelectSubset<T, player_statsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player_stats.
     * @param {player_statsCreateArgs} args - Arguments to create a Player_stats.
     * @example
     * // Create one Player_stats
     * const Player_stats = await prisma.player_stats.create({
     *   data: {
     *     // ... data to create a Player_stats
     *   }
     * })
     * 
     */
    create<T extends player_statsCreateArgs>(args: SelectSubset<T, player_statsCreateArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Player_stats.
     * @param {player_statsCreateManyArgs} args - Arguments to create many Player_stats.
     * @example
     * // Create many Player_stats
     * const player_stats = await prisma.player_stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends player_statsCreateManyArgs>(args?: SelectSubset<T, player_statsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Player_stats and returns the data saved in the database.
     * @param {player_statsCreateManyAndReturnArgs} args - Arguments to create many Player_stats.
     * @example
     * // Create many Player_stats
     * const player_stats = await prisma.player_stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Player_stats and only return the `id`
     * const player_statsWithIdOnly = await prisma.player_stats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends player_statsCreateManyAndReturnArgs>(args?: SelectSubset<T, player_statsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player_stats.
     * @param {player_statsDeleteArgs} args - Arguments to delete one Player_stats.
     * @example
     * // Delete one Player_stats
     * const Player_stats = await prisma.player_stats.delete({
     *   where: {
     *     // ... filter to delete one Player_stats
     *   }
     * })
     * 
     */
    delete<T extends player_statsDeleteArgs>(args: SelectSubset<T, player_statsDeleteArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player_stats.
     * @param {player_statsUpdateArgs} args - Arguments to update one Player_stats.
     * @example
     * // Update one Player_stats
     * const player_stats = await prisma.player_stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends player_statsUpdateArgs>(args: SelectSubset<T, player_statsUpdateArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Player_stats.
     * @param {player_statsDeleteManyArgs} args - Arguments to filter Player_stats to delete.
     * @example
     * // Delete a few Player_stats
     * const { count } = await prisma.player_stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends player_statsDeleteManyArgs>(args?: SelectSubset<T, player_statsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_stats
     * const player_stats = await prisma.player_stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends player_statsUpdateManyArgs>(args: SelectSubset<T, player_statsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_stats and returns the data updated in the database.
     * @param {player_statsUpdateManyAndReturnArgs} args - Arguments to update many Player_stats.
     * @example
     * // Update many Player_stats
     * const player_stats = await prisma.player_stats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Player_stats and only return the `id`
     * const player_statsWithIdOnly = await prisma.player_stats.updateManyAndReturn({
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
    updateManyAndReturn<T extends player_statsUpdateManyAndReturnArgs>(args: SelectSubset<T, player_statsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player_stats.
     * @param {player_statsUpsertArgs} args - Arguments to update or create a Player_stats.
     * @example
     * // Update or create a Player_stats
     * const player_stats = await prisma.player_stats.upsert({
     *   create: {
     *     // ... data to create a Player_stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_stats we want to update
     *   }
     * })
     */
    upsert<T extends player_statsUpsertArgs>(args: SelectSubset<T, player_statsUpsertArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsCountArgs} args - Arguments to filter Player_stats to count.
     * @example
     * // Count the number of Player_stats
     * const count = await prisma.player_stats.count({
     *   where: {
     *     // ... the filter for the Player_stats we want to count
     *   }
     * })
    **/
    count<T extends player_statsCountArgs>(
      args?: Subset<T, player_statsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_statsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_statsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Player_statsAggregateArgs>(args: Subset<T, Player_statsAggregateArgs>): Prisma.PrismaPromise<GetPlayer_statsAggregateType<T>>

    /**
     * Group by Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsGroupByArgs} args - Group by arguments.
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
      T extends player_statsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: player_statsGroupByArgs['orderBy'] }
        : { orderBy?: player_statsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, player_statsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_statsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player_stats model
   */
  readonly fields: player_statsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player_stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__player_statsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the player_stats model
   */
  interface player_statsFieldRefs {
    readonly id: FieldRef<"player_stats", 'BigInt'>
    readonly name: FieldRef<"player_stats", 'String'>
    readonly player_id: FieldRef<"player_stats", 'String'>
    readonly age: FieldRef<"player_stats", 'String'>
    readonly team: FieldRef<"player_stats", 'String'>
    readonly position: FieldRef<"player_stats", 'String'>
    readonly total_points: FieldRef<"player_stats", 'Int'>
    readonly total_rebounds: FieldRef<"player_stats", 'Int'>
    readonly total_assists: FieldRef<"player_stats", 'Int'>
    readonly total_steals: FieldRef<"player_stats", 'Int'>
    readonly total_blocks: FieldRef<"player_stats", 'Int'>
    readonly total_turnovers: FieldRef<"player_stats", 'Int'>
    readonly headshot_url: FieldRef<"player_stats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * player_stats findUnique
   */
  export type player_statsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats findUniqueOrThrow
   */
  export type player_statsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats findFirst
   */
  export type player_statsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_stats.
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_stats.
     */
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * player_stats findFirstOrThrow
   */
  export type player_statsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_stats.
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_stats.
     */
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * player_stats findMany
   */
  export type player_statsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing player_stats.
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * player_stats create
   */
  export type player_statsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The data needed to create a player_stats.
     */
    data?: XOR<player_statsCreateInput, player_statsUncheckedCreateInput>
  }

  /**
   * player_stats createMany
   */
  export type player_statsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many player_stats.
     */
    data: player_statsCreateManyInput | player_statsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_stats createManyAndReturn
   */
  export type player_statsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The data used to create many player_stats.
     */
    data: player_statsCreateManyInput | player_statsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_stats update
   */
  export type player_statsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The data needed to update a player_stats.
     */
    data: XOR<player_statsUpdateInput, player_statsUncheckedUpdateInput>
    /**
     * Choose, which player_stats to update.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats updateMany
   */
  export type player_statsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update player_stats.
     */
    data: XOR<player_statsUpdateManyMutationInput, player_statsUncheckedUpdateManyInput>
    /**
     * Filter which player_stats to update
     */
    where?: player_statsWhereInput
    /**
     * Limit how many player_stats to update.
     */
    limit?: number
  }

  /**
   * player_stats updateManyAndReturn
   */
  export type player_statsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The data used to update player_stats.
     */
    data: XOR<player_statsUpdateManyMutationInput, player_statsUncheckedUpdateManyInput>
    /**
     * Filter which player_stats to update
     */
    where?: player_statsWhereInput
    /**
     * Limit how many player_stats to update.
     */
    limit?: number
  }

  /**
   * player_stats upsert
   */
  export type player_statsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The filter to search for the player_stats to update in case it exists.
     */
    where: player_statsWhereUniqueInput
    /**
     * In case the player_stats found by the `where` argument doesn't exist, create a new player_stats with this data.
     */
    create: XOR<player_statsCreateInput, player_statsUncheckedCreateInput>
    /**
     * In case the player_stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<player_statsUpdateInput, player_statsUncheckedUpdateInput>
  }

  /**
   * player_stats delete
   */
  export type player_statsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Filter which player_stats to delete.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats deleteMany
   */
  export type player_statsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_stats to delete
     */
    where?: player_statsWhereInput
    /**
     * Limit how many player_stats to delete.
     */
    limit?: number
  }

  /**
   * player_stats without action
   */
  export type player_statsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
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


  export const Player_statsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    player_id: 'player_id',
    age: 'age',
    team: 'team',
    position: 'position',
    total_points: 'total_points',
    total_rebounds: 'total_rebounds',
    total_assists: 'total_assists',
    total_steals: 'total_steals',
    total_blocks: 'total_blocks',
    total_turnovers: 'total_turnovers',
    headshot_url: 'headshot_url'
  };

  export type Player_statsScalarFieldEnum = (typeof Player_statsScalarFieldEnum)[keyof typeof Player_statsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type player_statsWhereInput = {
    AND?: player_statsWhereInput | player_statsWhereInput[]
    OR?: player_statsWhereInput[]
    NOT?: player_statsWhereInput | player_statsWhereInput[]
    id?: BigIntFilter<"player_stats"> | bigint | number
    name?: StringNullableFilter<"player_stats"> | string | null
    player_id?: StringNullableFilter<"player_stats"> | string | null
    age?: StringNullableFilter<"player_stats"> | string | null
    team?: StringNullableFilter<"player_stats"> | string | null
    position?: StringNullableFilter<"player_stats"> | string | null
    total_points?: IntNullableFilter<"player_stats"> | number | null
    total_rebounds?: IntNullableFilter<"player_stats"> | number | null
    total_assists?: IntNullableFilter<"player_stats"> | number | null
    total_steals?: IntNullableFilter<"player_stats"> | number | null
    total_blocks?: IntNullableFilter<"player_stats"> | number | null
    total_turnovers?: IntNullableFilter<"player_stats"> | number | null
    headshot_url?: StringNullableFilter<"player_stats"> | string | null
  }

  export type player_statsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    player_id?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    total_rebounds?: SortOrderInput | SortOrder
    total_assists?: SortOrderInput | SortOrder
    total_steals?: SortOrderInput | SortOrder
    total_blocks?: SortOrderInput | SortOrder
    total_turnovers?: SortOrderInput | SortOrder
    headshot_url?: SortOrderInput | SortOrder
  }

  export type player_statsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: player_statsWhereInput | player_statsWhereInput[]
    OR?: player_statsWhereInput[]
    NOT?: player_statsWhereInput | player_statsWhereInput[]
    name?: StringNullableFilter<"player_stats"> | string | null
    player_id?: StringNullableFilter<"player_stats"> | string | null
    age?: StringNullableFilter<"player_stats"> | string | null
    team?: StringNullableFilter<"player_stats"> | string | null
    position?: StringNullableFilter<"player_stats"> | string | null
    total_points?: IntNullableFilter<"player_stats"> | number | null
    total_rebounds?: IntNullableFilter<"player_stats"> | number | null
    total_assists?: IntNullableFilter<"player_stats"> | number | null
    total_steals?: IntNullableFilter<"player_stats"> | number | null
    total_blocks?: IntNullableFilter<"player_stats"> | number | null
    total_turnovers?: IntNullableFilter<"player_stats"> | number | null
    headshot_url?: StringNullableFilter<"player_stats"> | string | null
  }, "id">

  export type player_statsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    player_id?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    total_rebounds?: SortOrderInput | SortOrder
    total_assists?: SortOrderInput | SortOrder
    total_steals?: SortOrderInput | SortOrder
    total_blocks?: SortOrderInput | SortOrder
    total_turnovers?: SortOrderInput | SortOrder
    headshot_url?: SortOrderInput | SortOrder
    _count?: player_statsCountOrderByAggregateInput
    _avg?: player_statsAvgOrderByAggregateInput
    _max?: player_statsMaxOrderByAggregateInput
    _min?: player_statsMinOrderByAggregateInput
    _sum?: player_statsSumOrderByAggregateInput
  }

  export type player_statsScalarWhereWithAggregatesInput = {
    AND?: player_statsScalarWhereWithAggregatesInput | player_statsScalarWhereWithAggregatesInput[]
    OR?: player_statsScalarWhereWithAggregatesInput[]
    NOT?: player_statsScalarWhereWithAggregatesInput | player_statsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"player_stats"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
    player_id?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
    age?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
    team?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
    position?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
    total_points?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    total_rebounds?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    total_assists?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    total_steals?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    total_blocks?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    total_turnovers?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    headshot_url?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
  }

  export type player_statsCreateInput = {
    id?: bigint | number
    name?: string | null
    player_id?: string | null
    age?: string | null
    team?: string | null
    position?: string | null
    total_points?: number | null
    total_rebounds?: number | null
    total_assists?: number | null
    total_steals?: number | null
    total_blocks?: number | null
    total_turnovers?: number | null
    headshot_url?: string | null
  }

  export type player_statsUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    player_id?: string | null
    age?: string | null
    team?: string | null
    position?: string | null
    total_points?: number | null
    total_rebounds?: number | null
    total_assists?: number | null
    total_steals?: number | null
    total_blocks?: number | null
    total_turnovers?: number | null
    headshot_url?: string | null
  }

  export type player_statsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    player_id?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    total_rebounds?: NullableIntFieldUpdateOperationsInput | number | null
    total_assists?: NullableIntFieldUpdateOperationsInput | number | null
    total_steals?: NullableIntFieldUpdateOperationsInput | number | null
    total_blocks?: NullableIntFieldUpdateOperationsInput | number | null
    total_turnovers?: NullableIntFieldUpdateOperationsInput | number | null
    headshot_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type player_statsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    player_id?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    total_rebounds?: NullableIntFieldUpdateOperationsInput | number | null
    total_assists?: NullableIntFieldUpdateOperationsInput | number | null
    total_steals?: NullableIntFieldUpdateOperationsInput | number | null
    total_blocks?: NullableIntFieldUpdateOperationsInput | number | null
    total_turnovers?: NullableIntFieldUpdateOperationsInput | number | null
    headshot_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type player_statsCreateManyInput = {
    id?: bigint | number
    name?: string | null
    player_id?: string | null
    age?: string | null
    team?: string | null
    position?: string | null
    total_points?: number | null
    total_rebounds?: number | null
    total_assists?: number | null
    total_steals?: number | null
    total_blocks?: number | null
    total_turnovers?: number | null
    headshot_url?: string | null
  }

  export type player_statsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    player_id?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    total_rebounds?: NullableIntFieldUpdateOperationsInput | number | null
    total_assists?: NullableIntFieldUpdateOperationsInput | number | null
    total_steals?: NullableIntFieldUpdateOperationsInput | number | null
    total_blocks?: NullableIntFieldUpdateOperationsInput | number | null
    total_turnovers?: NullableIntFieldUpdateOperationsInput | number | null
    headshot_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type player_statsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    player_id?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    total_rebounds?: NullableIntFieldUpdateOperationsInput | number | null
    total_assists?: NullableIntFieldUpdateOperationsInput | number | null
    total_steals?: NullableIntFieldUpdateOperationsInput | number | null
    total_blocks?: NullableIntFieldUpdateOperationsInput | number | null
    total_turnovers?: NullableIntFieldUpdateOperationsInput | number | null
    headshot_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type player_statsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    player_id?: SortOrder
    age?: SortOrder
    team?: SortOrder
    position?: SortOrder
    total_points?: SortOrder
    total_rebounds?: SortOrder
    total_assists?: SortOrder
    total_steals?: SortOrder
    total_blocks?: SortOrder
    total_turnovers?: SortOrder
    headshot_url?: SortOrder
  }

  export type player_statsAvgOrderByAggregateInput = {
    id?: SortOrder
    total_points?: SortOrder
    total_rebounds?: SortOrder
    total_assists?: SortOrder
    total_steals?: SortOrder
    total_blocks?: SortOrder
    total_turnovers?: SortOrder
  }

  export type player_statsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    player_id?: SortOrder
    age?: SortOrder
    team?: SortOrder
    position?: SortOrder
    total_points?: SortOrder
    total_rebounds?: SortOrder
    total_assists?: SortOrder
    total_steals?: SortOrder
    total_blocks?: SortOrder
    total_turnovers?: SortOrder
    headshot_url?: SortOrder
  }

  export type player_statsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    player_id?: SortOrder
    age?: SortOrder
    team?: SortOrder
    position?: SortOrder
    total_points?: SortOrder
    total_rebounds?: SortOrder
    total_assists?: SortOrder
    total_steals?: SortOrder
    total_blocks?: SortOrder
    total_turnovers?: SortOrder
    headshot_url?: SortOrder
  }

  export type player_statsSumOrderByAggregateInput = {
    id?: SortOrder
    total_points?: SortOrder
    total_rebounds?: SortOrder
    total_assists?: SortOrder
    total_steals?: SortOrder
    total_blocks?: SortOrder
    total_turnovers?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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