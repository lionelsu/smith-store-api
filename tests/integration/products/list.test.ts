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

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Deve obter todos os produtos da rota /products', async function () {
    const planifiedMock = productsMocks.productList.map((product) => product.dataValues);
    const fakeFindAll = sinon.stub().resolves(productsMocks.productList);
    sinon.stub(ProductModel, 'findAll').callsFake(fakeFindAll);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(planifiedMock)
  });
});
