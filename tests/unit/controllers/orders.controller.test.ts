import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMocks from '../../mocks/productsMocks';
import ordersController from '../../../src/controllers/ordersController';
import productsService from '../../../src/services/productsService';
import { Product } from '../../../src/types/Product';
import ordersMocks from '../../mocks/ordersMocks';
import ordersService from '../../../src/services/ordersService';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve ser retornar o código 200 com o json das orders formatadas', async function () {
    const planifiedMock = ordersMocks.orderList.map(({ dataValues }) => (
      {
        ...dataValues,
        productIds: dataValues.productIds?.map((product) =>  (product as Product).id) || [],
      }
    ));
    sinon.stub(ordersService, 'listOrders').resolves(planifiedMock);

    await ordersController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(planifiedMock);
  });
});
