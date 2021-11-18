# jsxFactory
A project to switch jsxFactory @ runtime

usage:

tsconfig.json
```json
{
"compilerOptions": {
    ...other options
    "jsx": "react",
    "jsxFactory": "customFactory"
    }
}
```
set custom jsx factory or 
```typescript
import React from "react";
import { CUSTOM_FACTORY_CONFIGURATION } from "jsx-factory";

CUSTOM_FACTORY_CONFIGURATION.createElement = React.createElement;
```
use somewhere jsx
```typescript jsx
import { customFactory } from "jsx-factory";

export const Example = (
    <div className={'example'} style={{textAlign: 'center'}}>expample</div>
)
```
=> result
```typescript jsx
import { customFactory } from "jsx-factory";
export const Example = (customFactory("div", { className: 'example', style: { textAlign: 'center' } }, "expample"));
```