
# based on:

https://www.tkat0.dev/posts/how-to-create-a-react-app-with-rust-and-wasm/


# init:

```bash
yarn install
cargo install wasm-pack
```

NOTE: on windows i'm using `wasm-pack@0.9.1`

# run:
```bash
yarn build:wasm
yarn add ./wasm-lib/pkg
yarn start
```