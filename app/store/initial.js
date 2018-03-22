const INITIAL_STATE = {
  router: {},
  markdown: {
    raw: '# EverlinkMD',
    compiled: '<h1>EverlinkMD</h1>',
  },
  cursor: { anchor: { ch: 0, line: 1 }, head: { ch: 0, line: 1 } },
  modalType: ''
};

export default INITIAL_STATE;
