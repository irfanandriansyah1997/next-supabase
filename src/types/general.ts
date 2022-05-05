export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);

export type Maybe<T> = T | undefined;

export type NullAble<T> = T | null;

/**
 * Work Day Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface WorksDayTypes {
  date: Date;
  dateText: string;
  dayText: string;
  isToday: boolean;
  monthText: string;
  timestamp: number;
}
