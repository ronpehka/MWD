    const btns = document.querySelectorAll('.modal1');
    const output = document.querySelector('.modal-text');
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        myModal.style.display = 'block';
        console.log(e.target.textContent);
        let val = e.target.textContent;
        let html = "";
        switch (val) {
        case 'Open 1':
          html = 'Number one is open <h1>ONE</h1>';
          break;
        case 'Open 2':
          html = '<h1>TWO</h1>';
          break;
        default:
          html = '<h1>ERROR</h1>';
        }
        output.innerHTML = html;
      })
    })
    const closer = document.querySelector('.close');
    const myModal = document.querySelector('#main');
    closer.addEventListener('click', closeModal);
    myModal.addEventListener('click', closeModal);
 
    function closeModal() {
      myModal.style.display = 'none';
    }