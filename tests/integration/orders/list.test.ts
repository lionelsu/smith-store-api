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
import { Product } from '../../../src/types/Product';
import ordersMocks from '../../mocks/ordersMocks';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Deve obter todos os produtos da rota products', async function () {
    const planifiedMock = ordersMocks.orderList.map(({ dataValues }) => (
      {
        ...dataValues,
        productIds: dataValues.productIds?.map((product) =>  (product as Product).id) || [],
      }
    ));
    const fakeFindAll = sinon.stub().resolves(ordersMocks.orderList);
    sinon.stub(OrderModel, 'findAll').callsFake(fakeFindAll);
    
    const response = await chai.request(app).get('/orders');
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(planifiedMock);
  });
});
