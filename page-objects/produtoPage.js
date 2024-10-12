class ProdutoPage {
    constructor(page) {
      this.page = page;
      this.nomeProdutoInput = page.locator('#produtonome'); // Campo de nome do produto
      this.precoProdutoInput = page.locator('#produtovalor'); // Campo de preço do produto
      this.coresProdutoInput = page.locator('#produtocores'); // Campo de descrição do produto
      this.adicionarButton = page.locator('button[type="submit"]'); // Botão de adicionar produto
    }
  
    async adicionarProduto(nome, preco, cores) {
      await this.nomeProdutoInput.fill(nome);
      await this.precoProdutoInput.fill(preco);
      await this.coresProdutoInput.fill(cores);
      await this.adicionarButton.click();
    }
  }
  
  module.exports = { ProdutoPage };
  