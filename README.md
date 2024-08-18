## Inicio
1. Iniciar proyecto node:  
`npm init -y`  

## Documentación  
https://jasmine.github.io/pages/getting_started.html  

1. Add Jasmine to your package.json:  
`npm install --save-dev jasmine`  

2. Initialize Jasmine in your project:  
`npx jasmine init`  

3. Set jasmine as your test script in your package.json:  
*"scripts": { "test": "jasmine" }*  

4. Run your tests  
`npm test`  

https://jasmine.github.io/setup/nodejs.html  
1. Install:  
`npm install --save-dev jasmine`  

2. Init:  
`npx jasmine init`  

3. Generate examples:    
`npx jasmine examples`  

4. Configuration:  
Customize *spec/support/jasmine.json* to enumerate the source files and spec files you would like the Jasmine runner to include. You may use dir glob strings.  

    Paths starting with ! are excluded, for example !**/*nospec.js.  

    *spec_dir* is used as a prefix for all *spec_files* and *helpers*. Helpers are executed once before all specs.  

5. Running specs:  
Once you have set up your *jasmine.json*, you can execute all your specs by running jasmine from the root of your project (or npx jasmine if you had installed it locally).  

    If you want to just run one spec or only those in files that match a certain glob pattern you can do it like this:  
`npx jasmine spec/appSpec.js`  

## Your first suite
https://jasmine.github.io/tutorials/your_first_suite  


## Copilot  
1. Instalar Jasmine. Abre tu terminal y ejecuta:  
`npm install --save-dev jasmine`    

2. Inicializar Jasmine. Ejecuta el siguiente comando para inicializar Jasmine en tu proyecto:  
`npx jasmine init`    

3. Configurar el script de test en package.json:  
```js
"scripts": {
  "test": "jasmine"
}
```  

4. Crear un archivo de test. Crea un archivo en el directorio spec (por defecto) llamado exampleSpec.js con el siguiente contenido:  
```js
describe("A suite", function() {  
  it("contains spec with an expectation", function() {  
    expect(true).toBe(true);  
  });  
});
```  

5. Ejecuta los tests. Ejecuta los tests con el siguiente comando:  
`npx jasmine` Este comando ejecuta Jasmine directamente usando npx, que es útil si has instalado Jasmine localmente en tu proyecto y no quieres modificar tu archivo package.json.  

    `npm test` Este comando ejecuta el script de test definido en tu archivo package.json. Es más conveniente si has configurado el script de test como se mencionó anteriormente.  
