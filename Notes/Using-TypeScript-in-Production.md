# Using TypeScript in Production

First, we have to generate a file called `tsconfig.json` using the command:

```bash
tsc --init
```

Then we have initialize the node project using `npm` which will create a `package.json` file. We can do this using the command:

```bash
npm init --yes
```

Generally, we have two folders named `src` and `dist`. `src` is the folder which contains our TypeScript file and in that file we write our code while `dist` is the folder which contains the JavaScript file which is usually generated using `tsc` from the file which is present inside `src` folder. Then the link of this JavaScript file is given in the root HTML file’s `script` tag.

To generate JavaScript file in the right place, we have to make some changes to the `tsconfig.json` file. You have the `outDir` entry and change its value to path where you want your output JavaScript file to be generated which in our case is `./dist`.

**************NOTE:************** One important thing to note here is that if you compile your TypeScript file using this command:

```bash
tsc <path>
```

Then, the TypeScript compiler will not take into account the changes you have made in `tsconfig.json` file.

In order to make sure that the TypeScript compiler take the settings into account which we have made inside `tsconfig.json` file, we have to run the TypeScript compiler i.e. `tsc` in the watch mode. To do that, use the following command:

```bash
tsc -w
```