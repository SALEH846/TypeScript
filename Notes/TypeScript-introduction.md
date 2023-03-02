# TypeScript

**************************************Types in TypeScript**************************************

- Number
- String
- Boolean
- Null
- Void
- Undefined
- Object
- Array
- Tuples
- Never
- Unknown
- Any — Don’t use that unless you are 100% sure about what you are doing — it is not a data type, it’s a special type
- and more..

************NOTE:** All types in TypeScript are **lowercase** keywords.

string, boolean and number types are also called primitive types.

`any` is not a data type. It is a special type, that you can use whenever you don’t want a particular value to cause type checking errors.

You usually want to avoid this, though, because `any` is not type-checked. Use the compiler flag `noImplicitAny` to flag any implicit `any` as an error.