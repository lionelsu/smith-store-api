import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import ordersService from '../../../src/services/ordersService';
import ordersMocks from '../../mocks/ordersMocks';
import OrderModel from '../../../src/database/models/order.model';
import { Product } from '../../../src/types/Product';

describe('Tests to OrdersService module', function () {
  beforeEach(function () { sinon.restore(); });

  it('Deve retornar a lista dos pedidos', async function () {
    const fakeMock = sinon.stub().resolves(ordersMocks.orderList);
    const createStub = sinon.stub(OrderModel, 'findAll').callsFake(fakeMock);

    const response = await ordersService.listOrders();
    const planifiedMock = ordersMocks.orderList.map(({ dataValues }) => (
      {
        ...dataValues,
        productIds: dataValues.productIds?.map((product) =>  (product as Product).id) || [],
      }
    ));

    expect(createStub).to.have.been.called;
    expect(response).to.be.deep.equal(planifiedMock);
  });
});
