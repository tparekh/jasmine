describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Server One';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Server One');
  });




  function updateServerTable() {
    serverTbody.innerHTML = '';
  
    for (let key in allServers) {
      let curServer = allServers[key];
  
      let newTr = document.createElement('tr');
      newTr.setAttribute('id', key);
  
      let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
  
      appendTd(newTr, curServer.serverName);
      appendTd(newTr, '$' + tipAverage.toFixed(2));
  
  
      appendDeleteBtn(newTr, 'server');
  
      serverTbody.append(newTr);
  
  
    }
  }


  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });

});



