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
});
