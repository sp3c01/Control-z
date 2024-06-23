document.addEventListener('DOMContentLoaded', function() {
    const btnInfos = document.querySelectorAll('.btn-info');

    btnInfos.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);

            if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
                targetDiv.style.display = 'block';
                this.textContent = 'Ver menos';
            } else {
                targetDiv.style.display = 'none';
                this.textContent = 'Ver mais';
            }
        });
    });

    const formsResposta = document.querySelectorAll('.form-resposta');

    formsResposta.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const respostaCorreta = this.dataset.resposta;
            const respostaUsuario = this.querySelector('input[type="text"]').value.toLowerCase();
            const solucao = this.nextElementSibling.querySelector('.solucao-texto');
            const feedbackErrado = this.nextElementSibling.nextElementSibling.querySelector('.feedback-errado');

            if (respostaUsuario === respostaCorreta) {
                solucao.textContent = `Parabéns! Você resolveu o desafio.`;
                solucao.style.color = 'green';
                feedbackErrado.style.display = 'none';
            } else {
                solucao.textContent = '';
                solucao.style.color = '';
                feedbackErrado.textContent = 'Resposta incorreta, tente novamente.';
                feedbackErrado.style.display = 'block';
            }

            solucao.parentNode.style.display = 'block';
        });
    });
});