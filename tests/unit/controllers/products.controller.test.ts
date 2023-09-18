import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMocks from '../../mocks/productsMocks';
import productsController from '../../../src/controllers/productsController';
import productsService from '../../../src/services/productsService';

chai.use(sinonChai);

describe('Tests to ProductsController module', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve ser possível realizar uma requisição de cadastro de produtos corretamente', async function () {
    const { id, orderId, ...products } = productsMocks.product;

    sinon.stub(productsService, 'insertProduct').resolves(productsMocks.product)

    req.body = { ...products, orderId };

    await productsController.create(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ ...products, id })
  });

  it('Deve ser retornar o status 201 e o objeto json com os dados dos produtos.', async function () {
    const planifiedMock = productsMocks.productList.map((product) => product.dataValues);
    sinon.stub(productsService, 'listProducts').resolves(planifiedMock);

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(planifiedMock);
  });
});
