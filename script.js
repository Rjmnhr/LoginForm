function login_details(email,pwd){
    var user=[{'email':'renjithcm.renju@gmail.com',
                'password':'renjith#@1'},
                {'email':'anjanaveepee@gmail.com',
                'password':'anjana#@1'}]

                var isPwdCorrect=false;
                var isUserFound=false;
                
                for(key in user){
                    if(user[key]['email']==email){
                        if(user[key]['password']==pwd){
                            isPwdCorrect=true;
                            isUserFound=true
                            break
                        }
                        else{
                            isUserFound=true;
                            break;
                        }
                    }
                    else{
                        isUserFound=false;
                        
                    }
                }
                    if(isPwdCorrect==true&&isUserFound==true){
                        alert('Login Successfully')
                    }
                    else if(isUserFound==true && isPwdCorrect==false){
                        document.getElementById('invalid').innerHTML="Incorrect password"

                    }
                    else{
                        document.getElementById('invalid').innerHTML="Invalid user"
                       
                    }


                   
                
}


  
  
  
  

