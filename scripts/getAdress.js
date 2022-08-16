
  window.dataLayer = window.dataLayer || [];
  console.log("Inside GTM's custom HTML Ethereum address detector");

  ethereum.request({ method: 'eth_accounts' }).then(function(accounts) {
    var account = accounts[0];
    console.log("GTM-WHZQXBQ container is cre8r.vip Inside GTM's custom HTML Ethereum address detector, found account", account);
    window.dataLayer.push({
      'event': 'WalletConnected',
      'address': account,
    });
  });

  ethereum.on('accountsChanged', function (accounts) {
    var account = accounts[0];
    console.log("GTM-WHZQXBQ container is cre8r.vip Inside GTM's custom HTML Ethereum address detector, found account", account);
    window.dataLayer.push({
      'event': 'WalletConnected',
      'address': account,
    });
  });
