const { expect } = require('chai');

/* eslint no-await-in-loop: 0 */
let id;
describe('TODOS', () => {
  it('Should be able to create a todo', async () => {
    const res = await request
      .post('/')
      .send({
        sortOrder: 1,
        isDone: true,
        value: 'Hi'
      })
      .expect(200);
    console.log(res.body);
    expect(res.body.value).to.equal('Hi');
    expect(res.body.sortOrder).to.equal(1);
    expect(res.body.isDone).to.equal(true);
    id = res.body.id;
  });
});

describe('TODOS', () => {
  it('Should be able to find all todos', async () => {
    const res = await request.get('/').expect(200);
    console.log(res.body);
    expect(res.body).to.be.an('array');
  });
});

describe('TODOS', () => {
  it('Should be able to find all completed todos', async () => {
    const res = await request.get(`/completed`).expect(200);
    const { message } = res.body;
    console.log(message);
    expect(res.body).to.be.an('array');
  });
});

describe('TODOS', () => {
  it('Should be able to find a particular todo', async () => {
    const res = await request.get(`/${id}`).expect(200);
    console.log(res.body);
    expect(res.body).to.be.an('object').to.include.all.keys('id', 'value', 'isDone', 'sortOrder');
  });
});

describe('TODOS', () => {
  it('Should be able to update a particular todo', async () => {
    const res = await request
      .put(`/${id}`)
      .send({
        sortOrder: 2,
        isDone: true,
        value: 'Hello'
      })
      .expect(200);
    const { message } = res.body;
    console.log(message);
    expect(message).to.be.equal('Todos was updated successfully.');
  });
});

describe('TODOS', () => {
  it('Should be able to delete a particular todo', async () => {
    const res = await request.delete(`/${id}`).expect(200);
    const { message } = res.body;
    console.log(message);
    expect(message).to.be.equal('Todo was deleted successfully!');
  });
});

describe('TODOS', () => {
  it('Should be able to delete all todos', async () => {
    const res = await request.delete(`/`).expect(200);
    const { message } = res.body;
    console.log(message);
    expect(message).to.be.equal(`All todos were deleted successfully!`);
  });
});
