const { expect } = require('chai');

/* eslint no-await-in-loop: 0 */
let id;
describe('Todo List Operations', () => {
  describe('Create a todo', function () {
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
  describe('Find all todos ', () => {
    it('Should be able to find all todos', async () => {
      const res = await request.get('/').expect(200);
      console.log(res.body);
      expect(res.body).to.be.an('array');
    });
  });

  describe('Find all completed todos', () => {
    it('Should be able to find all completed todos', async () => {
      const res = await request.get(`/completed`).expect(200);
      const { message } = res.body;
      console.log(message);
      expect(res.body).to.be.an('array');
    });
  });

  describe('Find a particular todo', () => {
    it('Should be able to find a particular todo', async () => {
      const res = await request.get(`/${id}`).expect(200);
      console.log(res.body);
      expect(res.body).to.be.an('object').to.include.all.keys('id', 'value', 'isDone', 'sortOrder');
    });
  });

  describe('Update todo value', () => {
    it('Should be able to update value of a particular todo', async () => {
      const res = await request
        .patch(`/updatedValue/${id}`)
        .send({
          value: 'hi'
        })
        .expect(200);
      const { message } = res.body;
      console.log(message);
      expect(message).to.be.equal('Todo CheckBox was updated successfully.');
    });
  });

  describe('Update todo checkbox', () => {
    it('Should be able to update checkbox of a particular todo', async () => {
      const res = await request
        .patch(`/updatedCheckBox/${id}`)
        .send({
          isDone: true
        })
        .expect(200);
      const { message } = res.body;
      console.log(message);
      expect(message).to.be.equal('Todos was updated successfully.');
    });
  });

  describe('Delete a todo', () => {
    it('Should be able to delete a particular todo', async () => {
      const res = await request.delete(`/${id}`).expect(200);
      const { message } = res.body;
      console.log(message);
      expect(message).to.be.equal('Todo was deleted successfully!');
    });
  });

  describe('Delete all todos', () => {
    it('Should be able to delete all todos', async () => {
      const res = await request.delete(`/`).expect(200);
      const { message } = res.body;
      console.log(message);
      expect(message).to.be.equal(`All todos were deleted successfully!`);
    });
  });
});
