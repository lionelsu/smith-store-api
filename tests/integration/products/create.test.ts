import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMocks from '../../mocks/productsMocks';
import productsController from '../../../src/controllers/productsController';
import productsService from '../../../src/services/productsService';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Deve ser possível acessar e cadastrar um produto pela rota POST /products', async function () {
    const { id, orderId, ...product } = productsMocks.product;
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(productsMocks.product));

    const response = await chai.request(app).post('/products').send({ ...product, orderId });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ ...product, id });
  });
});
