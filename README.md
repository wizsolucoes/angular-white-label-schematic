# Wiz Anglar White Label Schematic

Repositório para o Schematic para gerar código bolierplate com a [arquitetura de referência para aplicações Angular "white label"](https://github.com/wizsolucoes/angular-whitelabel).


## Uso

```bash
# Generate a new angular application
ng new my-app --style=scss

# Enter the directory
cd my-app

# Add white label arquitecture
ng add @wizsolucoes/angular-white-label
```

**IMPORTANTE: Este schematic supõe que a aplicação usa SASS e deve ser executado em projetos novos, pois faz a sobrescrita de arquivos.**