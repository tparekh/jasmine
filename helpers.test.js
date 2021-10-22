describe("Servers test (with setup and tear-down)", function() {
  // beforeEach(function () {
  //   // initialization logic
  //   billAmt.value = '100';
  //   tipAmt.value = '10';
  // });



  it('should add the total amount of tips', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(0);

    billAmtInput.value = 100;
    tipAmtInput.value = 10;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(10);
  });

  it('should add the total amount of payments', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(0);

    billAmtInput.value = 100;
    tipAmtInput.value = 10;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(100);
  });

  it('should calculate the tip percentage', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(0);

    billAmtInput.value = 100;
    tipAmtInput.value = 10;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(10);
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
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });

});