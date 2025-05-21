function checkAnswer(parameter) {
    let btnName=''
    idParagraph=''
    

    if (parameter=='question1') {
        btnName='q1'
        idParagraph='feedback1'
    }
    else {
        btnName='q2'
        idParagraph='feedback2'
    }
    let btnSelected=document.querySelector("input[name="+btnName+"]:checked")

    if (btnSelected==null) {
        alert("Necessário selecionar ao menos uma resposta!")
        return
    }
    
    let valueBtnSelected=document.querySelector("input[name="+btnName+"]:checked").value;

    let paragraph=document.getElementById(idParagraph)

    if (valueBtnSelected=="correct") {
        paragraph.className="correct"
        paragraph.textContent="CORRETO!"
    }
    else {
        paragraph.className="wrong"
        paragraph.textContent="INCORRETO!"
    }
}