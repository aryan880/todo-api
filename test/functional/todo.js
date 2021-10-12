/* eslint no-await-in-loop: 0 */
describe('TODOS', () => {
  it('Should be able to create a todo', async () => {
    const res = await request
      .post('/')
      .send({
        sortOrder: 1,
        isDone: false,
        value: 'Hi'
      })
      .expect(200);

    expect(res.body.value).to.equal('Hi');
    expect(res.body.sortOrder).to.equal(1);
    expect(res.body.isDone).to.equal(false);
  });
});
