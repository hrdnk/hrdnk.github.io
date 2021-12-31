document.addEventListener('DOMContentLoaded', function() {
    const menuLeftElem = document.getElementById('test-menu-left');
  //   const menuRightElem = document.getElementById('test-menu-right');

    const allEvents = [
      'sm.back',
      'sm.back-after',
      'sm.close',
      'sm.close-after',
      'sm.forward',
      'sm.forward-after',
      'sm.navigate',
      'sm.navigate-after',
      'sm.open',
      'sm.open-after',
    ];

    // allEvents.forEach(eventName => {
    //   menuLeftElem.addEventListener(eventName, event => logEvent('Menu left', event));
    //   menuRightElem.addEventListener(eventName, event => logEvent('Menu right', event));
    // });

    const menuLeft = new SlideMenu(menuLeftElem, {
      position: 'left',
      keyClose: 'Escape',
      submenuLinkAfter: '<span><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08544 3.71446L2.48787 0.118095C2.33002 -0.039365 2.07426 -0.039365 1.916 0.118095C1.75814 0.275555 1.75814 0.531311 1.916 0.688771L5.22821 3.99978L1.9164 7.3108C1.75854 7.46826 1.75854 7.72401 1.9164 7.88187C2.07426 8.03933 2.33041 8.03933 2.48827 7.88187L6.08584 4.2855C6.2413 4.12967 6.2413 3.8699 6.08544 3.71446Z" fill="#8B98B2"/></svg></span>',
      backLinkBefore: '<span style="margin-right: 15px"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.287122 6.30693L6.30691 0.287338C6.68984 -0.0957786 7.3107 -0.0957785 7.69345 0.287338C8.07622 0.670114 8.07622 1.29094 7.69345 1.67368L2.36686 7.0001L7.69329 12.3263C8.07607 12.7093 8.07607 13.33 7.69329 13.7128C7.31052 14.0957 6.68969 14.0957 6.30676 13.7128L0.286967 7.69312C0.0955791 7.50164 -6.73122e-06 7.25095 -6.71556e-06 7.00013C-6.6999e-06 6.74919 0.0957651 6.49832 0.287122 6.30693Z" fill="#596069"/></svg></span>',
    });

  //   const menuRight = new SlideMenu(menuRightElem, {
  // 	position: 'left',
  // 	keyClose: 'Escape',
  // 	submenuLinkAfter: '<span><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08544 3.71446L2.48787 0.118095C2.33002 -0.039365 2.07426 -0.039365 1.916 0.118095C1.75814 0.275555 1.75814 0.531311 1.916 0.688771L5.22821 3.99978L1.9164 7.3108C1.75854 7.46826 1.75854 7.72401 1.9164 7.88187C2.07426 8.03933 2.33041 8.03933 2.48827 7.88187L6.08584 4.2855C6.2413 4.12967 6.2413 3.8699 6.08544 3.71446Z" fill="#8B98B2"/></svg></span>',
  // 	backLinkBefore: '<span style="margin-right: 15px"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.287122 6.30693L6.30691 0.287338C6.68984 -0.0957786 7.3107 -0.0957785 7.69345 0.287338C8.07622 0.670114 8.07622 1.29094 7.69345 1.67368L2.36686 7.0001L7.69329 12.3263C8.07607 12.7093 8.07607 13.33 7.69329 13.7128C7.31052 14.0957 6.68969 14.0957 6.30676 13.7128L0.286967 7.69312C0.0955791 7.50164 -6.73122e-06 7.25095 -6.71556e-06 7.00013C-6.6999e-06 6.74919 0.0957651 6.49832 0.287122 6.30693Z" fill="#596069"/></svg></span>',
  //   });

    // if (window.innerWidth < 767) {
    //   menuLeft.open(false);
    // }
  });

$('.slide-menu__burger').on('click', function(){
  $('body').toggleClass('fixed')
})
