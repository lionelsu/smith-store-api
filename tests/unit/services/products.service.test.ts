import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsService from '../../../src/services/productsService';
import productsMocks from '../../mocks/productsMocks';

chai.use(chaiHttp);

describe('Tests to Products Service module', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Deve ser possível cadastrar um produto corretamente', async function () {
    const createStub = sinon.stub(ProductModel, 'create').resolves(
      ProductModel.build(productsMocks.product)
    );

    const response = await productsService.insertProduct(productsMocks.product);

    expect(createStub).to.have.been.calledWith(productsMocks.product);
    expect(response).to.deep.equal(productsMocks.product);
  });
  
  it('Deve ser possível listar todos os produtos do banco de dados', async function () {
    const fakeFindAll = sinon.stub().resolves(productsMocks.productList);
    const createStub = sinon.stub(ProductModel, 'findAll').callsFake(fakeFindAll);

    const response = await productsService.listProducts();
    const planifiedMock = productsMocks.productList.map((product) => product.dataValues);

    expect(createStub).to.have.been.calledWithExactly();
    expect(response).to.be.deep.equal(planifiedMock);
  });
});
