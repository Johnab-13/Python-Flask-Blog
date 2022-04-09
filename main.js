window.onload=function(){
let mic=document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let chatareaouter1 = document.querySelector('.chatareaouter1');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output +=`<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output +=`<div class="chatarea-inner chatbot">${chatbotmsg}</div> `;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    var str='';
    var str2='';

};

var transcript='';
recognition.onresult=function(e){
    document.getElementById("cont").value="";
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    document.getElementById("question").value=transcript;

    if(document.getElementById("company").value =="")
    {
    if(transcript.includes('BPCL') || transcript.includes('bpcl') || transcript.includes('mrpl') || transcript.includes('MRPL') || transcript.includes('IOCL') || transcript.includes('Reliance') || transcript.includes('Nayara'))
    {
    document.getElementById("company").value=transcript;
    }
    var comp=document.getElementById("company").value;
    if(comp==""){
    document.getElementById("invalid").value='Please select company';
    var y=$.ajax({
    data:{

    question: $("#question").val(),
    invalid: $("#invalid").val(),
    company: $("#company").val(),
    },
    type : 'POST',
    url : '/chatbot2',
    global:false,
    async:false,
    })
    .done(function(data)
    {
     return data;
    }).responseText;
    event.preventDefault();
    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else{
    document.getElementById("invalid").value="";
    var y=$.ajax({
    data:{

    question: $("#question").val(),
    invalid: $("#invalid").val(),
    company: $("#company").val(),
    },
    type : 'POST',
    url : '/chatbot2',
    global:false,
    async:false,
    })
    .done(function(data)
    {
     return data;
    }).responseText;
    event.preventDefault();
    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
    }
}
    else if(document.getElementById("port").value =="")
    {
        var comp=document.getElementById("company").value;
        if(document.getElementById("company").value!=transcript)
        {
            if(transcript.includes('BPCL') ||  transcript.includes('IOCL') || transcript.includes('mrpl') || transcript.includes('Nayara') || transcript.includes('Reliance'))
            {
               document.getElementById("port").value="";
               document.getElementById("company").value=transcript;
               var comp=document.getElementById("company").value;
               if(comp.includes("BPCL"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Vizag')  || transcript.includes('Paradeep') || transcript.includes('Paradip')|| transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        {
                        document.getElementById("invalid").value='';
                        var y=$.ajax({
                        data:{
                        question: $("#question").val(),
                        company:$("#company").val(),
                        invalid: $("#invalid").val(),
                        port: $("#port").val(),
                        month: $("#month").val(),
                        year: $("#year").val(),
                        },
                        type : 'POST',
                        url : '/chatbot3',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                    {
                     document.getElementById("invalid").value='Invalid selected port for bpcl';
                     var y=$.ajax({
                     data:{
                     question: $("#question").val(),
                     invalid: $("#invalid").val(),
                     port: $("#port").val(),
                     company:$("#company").val(),
                     month: $("#month").val(),
                     year: $("#year").val(),
                     },
                     type : 'POST',
                     url : '/chatbot3',
                     global:false,
                     async:false,
                     })
                     .done(function(data)
                     {
                      return data;
                     }).responseText;
                     event.preventDefault();
                     chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(comp.includes("IOCL"))
               {
                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        {
                            document.getElementById("invalid").value='';
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                            month: $("#month").val(),
                            year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot3',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            event.preventDefault();
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text=y
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                        {
                         document.getElementById("invalid").value='Invalid selected port for IOCL';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
               }

               else if(comp.includes("Reliance"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                                chatbotvoice(transcript);
                                event.preventDefault();
                                const speech = new SpeechSynthesisUtterance();
                                speech.text=y
                                window.speechSynthesis.speak(speech);
                                chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for Reliance';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                         chatbotvoice(transcript);
                         event.preventDefault();
                         const speech = new SpeechSynthesisUtterance();
                         speech.text=y
                         window.speechSynthesis.speak(speech);
                         chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(comp.includes("Nayara"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month:$("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                                chatbotvoice(transcript);
                                event.preventDefault();
                                const speech = new SpeechSynthesisUtterance();
                                speech.text=y
                                window.speechSynthesis.speak(speech);
                                chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for Nayara';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(comp.includes("mrpl"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                                chatbotvoice(transcript);
                                event.preventDefault();
                                const speech = new SpeechSynthesisUtterance();
                                speech.text=y
                                window.speechSynthesis.speak(speech);
                                chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for mrpl';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
            }
            else if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
            {

                if(comp.includes("BPCL"))
                {
                    if(transcript.includes('Mundra') ||  transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!=transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{

                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                                chatbotvoice(transcript);
                                event.preventDefault();
                                const speech = new SpeechSynthesisUtterance();
                                speech.text=y
                                window.speechSynthesis.speak(speech);
                                chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for bpcl';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("IOCL"))
                {
                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for IOCL';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("Reliance"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid port for Reliance';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                         chatbotvoice(transcript);
                         event.preventDefault();
                         const speech = new SpeechSynthesisUtterance();
                         speech.text=y
                         window.speechSynthesis.speak(speech);
                         chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("Nayara"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                                     month: $("#month").val(),
                     year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid port for Nayara';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("mrpl"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid port for mrpl';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
            }
            else
            {
                document.getElementById("invalid").value='Invalid input';
                var y=$.ajax({
                data:{
                question: $("#question").val(),
                invalid: $("#invalid").val(),
                port: $("#port").val(),
                company:$("#company").val(),
                                     month: $("#month").val(),
                     year: $("#year").val(),
                },
                type : 'POST',
                url : '/chatbot3',
                global:false,
                async:false,
                })
                .done(function(data)
                {
                 return data;
                }).responseText;
                event.preventDefault();
                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
            }
        }
    }



    else if(document.getElementById("month").value =="")
    {
        var comp=document.getElementById("company").value;
        var port=document.getElementById("port").value;
        var month=document.getElementById("month").value;
        if(document.getElementById("company").value!=transcript)
        {
            if(transcript.includes('BPCL') ||  transcript.includes('IOCL') || transcript.includes('mrpl') || transcript.includes('Nayara') || transcript.includes('Reliance'))
            {
               document.getElementById("port").value="";
               document.getElementById("company").value=transcript;
               if(comp.includes("BPCL"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Vizag')  || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        {
                        document.getElementById("invalid").value='';
                        var y=$.ajax({
                        data:{
                        question: $("#question").val(),
                        company:$("#company").val(),
                        invalid: $("#invalid").val(),
                        port: $("#port").val(),
                                             month: $("#month").val(),
                     year: $("#year").val(),
                        },
                        type : 'POST',
                        url : '/chatbot3',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                    {
                     document.getElementById("invalid").value='Invalid selected port for bpcl';
                     var y=$.ajax({
                     data:{
                     question: $("#question").val(),
                     invalid: $("#invalid").val(),
                     port: $("#port").val(),
                     company:$("#company").val(),
                                          month: $("#month").val(),
                     year: $("#year").val(),
                     },
                     type : 'POST',
                     url : '/chatbot3',
                     global:false,
                     async:false,
                     })
                     .done(function(data)
                     {
                      return data;
                     }).responseText;
                     event.preventDefault();
                     chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(comp.includes("IOCL"))
               {
                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        {
                            document.getElementById("invalid").value='';
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                                                 month: $("#month").val(),
                     year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot3',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            event.preventDefault();
                            chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                        {
                         document.getElementById("invalid").value='Invalid selected port for IOCL';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
               }

               else if(comp.includes("Reliance"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep')|| transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                                     month: $("#month").val(),
                     year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for Reliance';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(comp.includes("Nayara"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                                     month: $("#month").val(),
                     year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for Nayara';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                                              month: $("#month").val(),
                     year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(comp.includes("mrpl"))
               {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                                     month: $("#month").val(),
                     year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for mrpl';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
            }
            else if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
            {
                var comp=document.getElementById("company").value;
                var port=document.getElementById("port").value;
                if(comp.includes("BPCL"))
                {
                    if(transcript.includes('Mundra') ||  transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!=transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{

                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for bpcl';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("IOCL"))
                {
                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid selected port for IOCL';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("Reliance"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                                 year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid port for Reliance';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("Nayara"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                         year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid port for Nayara';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("mrpl"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep')|| transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                       document.getElementById("port").value=transcript;
                       var port=document.getElementById("port").value;
                           if(port.includes!==transcript && comp!="")
                           {
                                document.getElementById("invalid").value='';
                                var y=$.ajax({
                                data:{
                                question: $("#question").val(),
                                company:$("#company").val(),
                                invalid: $("#invalid").val(),
                                port: $("#port").val(),
                                month: $("#month").val(),
                         year: $("#year").val(),
                                },
                                type : 'POST',
                                url : '/chatbot3',
                                global:false,
                                async:false,
                                })
                                .done(function(data)
                                {
                                 return data;
                                }).responseText;
                                event.preventDefault();
                                chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                            }
                    }
                    else
                    {
                         document.getElementById("invalid").value='Invalid port for mrpl';
                         var y=$.ajax({
                         data:{
                         question: $("#question").val(),
                         invalid: $("#invalid").val(),
                         port: $("#port").val(),
                         company:$("#company").val(),
                         month: $("#month").val(),
                         year: $("#year").val(),
                         },
                         type : 'POST',
                         url : '/chatbot3',
                         global:false,
                         async:false,
                         })
                         .done(function(data)
                         {
                          return data;
                         }).responseText;
                         event.preventDefault();
                         chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
            }
            else if(transcript.includes('January') || transcript.includes('February') || transcript.includes('March') || transcript.includes('April') || transcript.includes('May') || transcript.includes('June') || transcript.includes('July') || transcript.includes('August') || transcript.includes('September') || transcript.includes('October') || transcript.includes('November') || transcript.includes('December'))
            {

                document.getElementById("month").value=transcript;

                if(month.includes!==transcript && comp!="" && port!="")
                {
                    document.getElementById("invalid").value='';
                    var y=$.ajax({
                    data:{
                    question: $("#question").val(),
                    company:$("#company").val(),
                    invalid: $("#invalid").val(),
                    port: $("#port").val(),
                    month: $("#month").val(),
                    year: $("#year").val(),
                    },
                    type : 'POST',
                    url : '/chatbot3',
                    global:false,
                    async:false,
                    })
                    .done(function(data)
                    {
                     return data;
                    }).responseText;
                    event.preventDefault();
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
            }
            else
            {
                 document.getElementById("invalid").value='Invalid input';
                 var y=$.ajax({
                 data:{
                 question: $("#question").val(),
                 invalid: $("#invalid").val(),
                 port: $("#port").val(),
                 company:$("#company").val(),
                 month: $("#month").val(),
                         year: $("#year").val(),
                 },
                 type : 'POST',
                 url : '/chatbot3',
                 global:false,
                 async:false,
                 })
                 .done(function(data)
                 {
                  return data;
                 }).responseText;
                 event.preventDefault();
                 chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
            }
        }
    }


    else if(document.getElementById("year").value =="")
    {
        var comp=document.getElementById("company").value;
        var port=document.getElementById("port").value;
        var month=document.getElementById("month").value;
        if(document.getElementById("company").value!=transcript)
        {
            if(transcript.includes('BPCL') ||  transcript.includes('IOCL') || transcript.includes('mrpl') || transcript.includes('Nayara') || transcript.includes('Reliance'))
            {
               if(transcript.includes('BPCL'))
               {
                    if(port.includes('Mundra') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip') || port.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is BPCL is not correct for port selected';
                        var y=$.ajax({
                        data:{

                        invalid: $("#invalid").val(),

                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('IOCL'))
               {
                    if(port.includes('Vizag') || port.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is IOCL is not correct for port selected';
                        var y=$.ajax({
                        data:{

                        invalid: $("#invalid").val(),

                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('Reliance'))
               {
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Mangalore') || port.includes('Kochi') || port.includes('Chennai') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip') || port.includes('Haldia') || port.includes('Budge Budge') || port.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));

                        }

                    else
                    {
                        document.getElementById("invalid").value='Company selected which is Reliance is not correct for port selected';
                        var y=$.ajax({
                        data:{

                        invalid: $("#invalid").val(),

                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
                else if(transcript.includes('Nayara'))
               {
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Kochi') || port.includes('Chennai') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip')|| port.includes('Haldia') || port.includes('Ennore'))
                    {
                      document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }

                    else
                    {
                        document.getElementById("invalid").value='Company selected which is Nayara is not correct for port selected';
                        var y=$.ajax({
                        data:{

                        invalid: $("#invalid").val(),

                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('mrpl') || transcript.includes('MRPL'))
               {
                 if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Kochi') || port.includes('Chennai')|| port.includes('Paradip') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Haldia') || port.includes('Budge Budge') || port.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                 else
                 {
                    document.getElementById("invalid").value='Company selected which is Nayara is not correct for port selected';
                    var y=$.ajax({
                    data:{

                    invalid: $("#invalid").val(),

                    },
                    type : 'POST',
                    url : '/chatbot4',
                    global:false,
                    async:false,
                    })
                    .done(function(data)
                    {
                     return data;
                    }).responseText;
                    event.preventDefault();
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
//                    else
//                    {
//                        document.getElementById("invalid").value='Company selected which is MRPL is not correct for port selected';
//                        var y=$.ajax({
//                        data:{
//
//                        invalid: $("#invalid").val(),
//
//                        },
//                        type : 'POST',
//                        url : '/chatbot4',
//                        global:false,
//                        async:false,
//                        })
//                        .done(function(data)
//                        {
//                         return data;
//                        }).responseText;
//                        event.preventDefault();
//                        chatareamain.appendChild(showusermsg(transcript));
//                        chatbotvoice(transcript);
//                        event.preventDefault();
//                        const speech = new SpeechSynthesisUtterance();
//                        speech.text=y
//                        window.speechSynthesis.speak(speech);
//                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }







































































































































//
//
//                    else
//                    {
//                     document.getElementById("invalid").value='Invalid selected port for bpcl';
//                     var y=$.ajax({
//                     data:{
//                     question: $("#question").val(),
//                     invalid: $("#invalid").val(),
//                     port: $("#port").val(),
//                     company:$("#company").val(),
//                                          month: $("#month").val(),
//                     year: $("#year").val(),
//                     },
//                     type : 'POST',
//                     url : '/chatbot3',
//                     global:false,
//                     async:false,
//                     })
//                     .done(function(data)
//                     {
//                      return data;
//                     }).responseText;
//                     event.preventDefault();
//                     chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//               }
//               else if(comp.includes("IOCL"))
//               {
//                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
//                    {
//                        document.getElementById("port").value=transcript;
//                        var port=document.getElementById("port").value;
//                        if(port.includes!==transcript && comp!="")
//                        {
//                            document.getElementById("invalid").value='';
//                            var y=$.ajax({
//                            data:{
//                            question: $("#question").val(),
//                            company:$("#company").val(),
//                            invalid: $("#invalid").val(),
//                            port: $("#port").val(),
//                                                 month: $("#month").val(),
//                     year: $("#year").val(),
//                            },
//                            type : 'POST',
//                            url : '/chatbot3',
//                            global:false,
//                            async:false,
//                            })
//                            .done(function(data)
//                            {
//                             return data;
//                            }).responseText;
//                            event.preventDefault();
//                            chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                        }
//                    }
//                    else
//                        {
//                         document.getElementById("invalid").value='Invalid selected port for IOCL';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                                              month: $("#month").val(),
//                     year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                        }
//               }
//
//               else if(comp.includes("Reliance"))
//               {
//                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradip')|| transcript.includes('Paradeep') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                                     month: $("#month").val(),
//                     year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid selected port for Reliance';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                                              month: $("#month").val(),
//                     year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//               }
//               else if(comp.includes("Nayara"))
//               {
//                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip')|| transcript.includes('Haldia') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                                     month: $("#month").val(),
//                     year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid selected port for Nayara';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                                              month: $("#month").val(),
//                     year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//               }
//               else if(comp.includes("mrpl"))
//               {
//                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai')|| transcript.includes('Paradip') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                                     month: $("#month").val(),
//                     year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid selected port for mrpl';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                         month: $("#month").val(),
//                         year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//               }
//            }
//            else if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip')|| transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
//            {
//                  document.getElementById("month").value="";
////                var comp=document.getElementById("comp").value;
////                var port=document.getElementById("port").value;
////                var month=document.getElementById("month").value;
//                if(comp.includes("BPCL"))
//                {
//                    if(transcript.includes('Mundra') ||  transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip')|| transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!=transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                month: $("#month").val(),
//                                year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid selected port for bpcl';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                         month: $("#month").val(),
//                         year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//                }
//                else if(comp.includes("IOCL"))
//                {
//                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                month: $("#month").val(),
//                                year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid selected port for IOCL';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                         month: $("#month").val(),
//                         year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//                }
//                else if(comp.includes("Reliance"))
//                {
//                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                month: $("#month").val(),
//                                 year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid port for Reliance';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                         month: $("#month").val(),
//                         year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//                }
//                else if(comp.includes("Nayara"))
//                {
//                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                month: $("#month").val(),
//                         year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                                chatbotvoice(transcript);
//                                event.preventDefault();
//                                const speech = new SpeechSynthesisUtterance();
//                                speech.text=y
//                                window.speechSynthesis.speak(speech);
//                                chatareamain.appendChild(showchatbotmsg(speech.text));
//                                }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid port for Nayara';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                         month: $("#month").val(),
//                         year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//                }
//                else if(comp.includes("mrpl"))
//                {
//                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
//                    {
//                       document.getElementById("port").value=transcript;
//                       var port=document.getElementById("port").value;
//                           if(port.includes!==transcript && comp!="")
//                           {
//                                document.getElementById("invalid").value='';
//                                var y=$.ajax({
//                                data:{
//                                question: $("#question").val(),
//                                company:$("#company").val(),
//                                invalid: $("#invalid").val(),
//                                port: $("#port").val(),
//                                month: $("#month").val(),
//                         year: $("#year").val(),
//                                },
//                                type : 'POST',
//                                url : '/chatbot3',
//                                global:false,
//                                async:false,
//                                })
//                                .done(function(data)
//                                {
//                                 return data;
//                                }).responseText;
//                                event.preventDefault();
//                                chatareamain.appendChild(showusermsg(transcript));
//                                chatbotvoice(transcript);
//                                event.preventDefault();
//                                const speech = new SpeechSynthesisUtterance();
//                                speech.text=y
//                                window.speechSynthesis.speak(speech);
//                                chatareamain.appendChild(showchatbotmsg(speech.text));
//                            }
//                    }
//                    else
//                    {
//                         document.getElementById("invalid").value='Invalid port for mrpl';
//                         var y=$.ajax({
//                         data:{
//                         question: $("#question").val(),
//                         invalid: $("#invalid").val(),
//                         port: $("#port").val(),
//                         company:$("#company").val(),
//                         month: $("#month").val(),
//                         year: $("#year").val(),
//                         },
//                         type : 'POST',
//                         url : '/chatbot3',
//                         global:false,
//                         async:false,
//                         })
//                         .done(function(data)
//                         {
//                          return data;
//                         }).responseText;
//                         event.preventDefault();
//                         chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                    }
//                }
//            }
//            else if(transcript.includes('January') || transcript.includes('February') || transcript.includes('March') || transcript.includes('April') || transcript.includes('May') || transcript.includes('June') || transcript.includes('July') || transcript.includes('August') || transcript.includes('September') || transcript.includes('October') || transcript.includes('November') || transcript.includes('December'))
//            {
////                var comp=document.getElementById("comp").value;
////                var port=document.getElementById("port").value;
////                var month=document.getElementById("month").value;
//                document.getElementById("month").value=transcript;
//                var month=document.getElementById("month").value;
//                if(month.includes!==transcript && comp!="" && port!="")
//                {
//                    document.getElementById("invalid").value='';
//                    var y=$.ajax({
//                    data:{
//                    question: $("#question").val(),
//                    company:$("#company").val(),
//                    invalid: $("#invalid").val(),
//                    port: $("#port").val(),
//                    month: $("#month").val(),
//                    year: $("#year").val(),
//                    },
//                    type : 'POST',
//                    url : '/chatbot3',
//                    global:false,
//                    async:false,
//                    })
//                    .done(function(data)
//                    {
//                     return data;
//                    }).responseText;
//                    event.preventDefault();
//                    chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                }
//            }
//            else if(transcript.includes('2020') || transcript.includes('2021') || transcript.includes('2022') || transcript.includes('2023'))
//            {
//
//                document.getElementById("year").value=transcript;
//                var year=document.getElementById("year").value;
//                if(year.includes!==transcript && comp!="" && port!="" && month!="")
//                {
//                    document.getElementById("invalid").value='';
//                    var y=$.ajax({
//                    data:{
//                    question: $("#question").val(),
//                    company:$("#company").val(),
//                    invalid: $("#invalid").val(),
//                    port: $("#port").val(),
//                    month: $("#month").val(),
//                    year: $("#year").val(),
//                    },
//                    type : 'POST',
//                    url : '/chatbot',
//                    global:false,
//                    async:false,
//                    })
//                    .done(function(data)
//                    {
//                     return data;
//                    }).responseText;
//                    chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//
//                    speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//                }
//            }
//            else
//            {
//                 document.getElementById("invalid").value='Invalid input';
//                 var y=$.ajax({
//                 data:{
//                 question: $("#question").val(),
//                 invalid: $("#invalid").val(),
//                 port: $("#port").val(),
//                 company:$("#company").val(),
//                 month: $("#month").val(),
//                 year: $("#year").val(),
//                 },
//                 type : 'POST',
//                 url : '/chatbot3',
//                 global:false,
//                 async:false,
//                 })
//                 .done(function(data)
//                 {
//                  return data;
//                 }).responseText;
//                 event.preventDefault();
//                 chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//            }
//
//
//
//
//    else if(document.getElementById("cont").value =="")
//    {
//        if(transcript==('ok') || transcript==('yes') || transcript==('no') || transcript.includes('2020') || transcript.includes('2021') || transcript.includes('2022') || transcript.includes('2023'))
//        {
//            document.getElementById("cont").value=transcript;
//        }
//        var cont=document.getElementById("cont").value;
//        if(cont=="" || cont=="you know" || cont.includes("2020") || cont.includes("2021") || cont.includes("2022") || cont.includes("2023"))
//        {
//            document.getElementById("invalid").value='Please select yes or no';
//            var y=$.ajax({
//            data:{
//            question: $("#question").val(),
//            invalid: $("#invalid").val(),
//            cont: $("#cont").val(),
//            },
//            type : 'POST',
//            url : '/chatbot6',
//            global:false,
//            async:false,
//            })
//            .done(function(data)
//            {
//             return data;
//            }).responseText;
//            event.preventDefault();
//            chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//        }
//        else
//        {
//            document.getElementById("company").value="";
//            document.getElementById("port").value="";
//            document.getElementById("month").value="";
//            document.getElementById("year").value="";
//            var y=$.ajax({
//            data:{
//            question: $("#question").val(),
//            invalid: $("#invalid").val(),
//            cont: $("#cont").val(),
//            },
//            type : 'POST',
//            url : '/chatbot6',
//            global:false,
//            async:false,
//            })
//            .done(function(data)
//            {
//             return data;
//            }).responseText;
//            event.preventDefault();
//                   chatareamain.appendChild(showusermsg(transcript));
//                    chatbotvoice(transcript);
//                    event.preventDefault();
//                    const speech = new SpeechSynthesisUtterance();
//
//                    speech.text=y
//                    window.speechSynthesis.speak(speech);
//                    chatareamain.appendChild(showchatbotmsg(speech.text));
//
        }
    }

//    chatareamain.appendChild(showusermsg(transcript));
//    chatbotvoice(transcript);
////    if(transcript.includes('2020') || transcript.includes('2021') || transcript.includes('2022') || transcript.includes('2023'))
////    {
////        const speech = new SpeechSynthesisUtterance();
////        speech.text=y
////        window.speechSynthesis.speak(speech);
////        chatareamain.appendChild(showchatbotmsg(speech.text));
////        if(document.getElementById("company").value !="" && document.getElementById("port").value !="" && document.getElementById("month").value !="" & document.getElementById("year").value !="")
////        {
////            speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
////            window.speechSynthesis.speak(speech);
////            chatareamain.appendChild(showchatbotmsg(speech.text));
////        }
////    }
////    else
////    {
//    const speech = new SpeechSynthesisUtterance();
//    speech.text=y
//    window.speechSynthesis.speak(speech);
//    chatareamain.appendChild(showchatbotmsg(speech.text));
////    }



    chatareamain.appendChild(showchatbotmsg("Which company do u want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='company' id='Reliance' value='Reliance'/><label class='radio__label' for='Reliance'>Reliance</label><input class='radio__input' type='radio' name='company' id='IOCL' value='IOCL'/><label class='radio__label' for='IOCL'>IOCL</label><input class='radio__input' type='radio' name='company' id='BPCL' value='BPCL'/><label class='radio__label' for='BPCL'>BPCL</label><input class='radio__input' type='radio' name='company' id='Nayara' value='Nayara'/><label class='radio__label' for='Nayara'>Nayara</label><input class='radio__input' type='radio' name='company' id='MRPL' value='MRPL'/><label class='radio__label' for='MRPL'>MRPL</label></div>"))
    recognition.onend=function()
    {
        mic.style.background="#ff3b3b";
    }

    mic.addEventListener("click",function()
    {
        mic.style.background="#39c81f";
        recognition.start();
        console.log("Activated");
    })
}

