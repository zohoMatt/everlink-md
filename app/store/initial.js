const INITIAL_STATE = {
  router: {},
  markdown: {
    raw: '# EverlinkMD',
    compiled: '<h1>EverlinkMD</h1>',
  },
  cursor: { anchor: { ch: 0, line: 1 }, head: { ch: 0, line: 1 } },
  scrollPercent: 0,
  modalType: '',
  modalCachedCode: ''
};

export default INITIAL_STATE;
