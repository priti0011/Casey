import React from 'react';
import './style.css';
import { CCard, CCardBody, CCardImage, CCardTitle, CCardText } from '@coreui/react';
const Feature = () => {
    return (
    <div>
            <div className="container">
                <div className="row mt-5">
                 <div className="col-12 my-2">
                        <p className="mt-1 text-alignment m-0 font-14 letter-spacing5 font-Inter font-drak-gray line-height-20 fw-600">FEATURES</p>
                    </div>
                       <div className="col-12 text-alignment my-2 ">
                        <h3 className="m-0 font-44 font-Inter-600 ">Here is more of what</h3>
                        <h3 className="m-0 font-44 font-Inter-600 ">it can do for you</h3>
                    </div>
                    <div className="col-12 text-alignment my-3">
                        <p className="m-0 font-16 font-Inter-400 line-height-16">Lorem ipaum dolor sit amet,consectetur adipiscing elit. Sit sit mus turpis sed <br/>sapien amet, purus condimentum sit.</p>
                    </div>
                </div>
                <div className="row mt-5 content">   
                    <CCard className="col-12 col-sm-6 col-lg-4">                      
                    <CCardBody className="text-alignment px-md-5 px-lg-4">         
                             <div>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_102)">
                                <path d="M22.7019 32.6973C27.8795 32.6973 32.0769 28.4999 32.0769 23.3223C32.0769 18.1446 27.8795 13.9473 22.7019 13.9473C17.5242 13.9473 13.3269 18.1446 13.3269 23.3223C13.3269 28.4999 17.5242 32.6973 22.7019 32.6973Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.7019 2.69727V6.44727" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.7019 40.1973V43.9473" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.11398 8.73438L10.7765 11.3969" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M34.6267 35.2471L37.2892 37.9096" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.07687 23.3223H5.82687" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M39.5769 23.3223H43.3269" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.11398 37.9096L10.7765 35.2471" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M34.6267 11.3969L37.2892 8.73438" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2_102">
                                    <rect width="45" height="45" fill="white" transform="translate(0.201874 0.822266)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </div>                    
                   <CCardTitle className="feature py-0 my-3">Feature 1</CCardTitle>
                    <CCardText className="decription px-5 px-sm-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</CCardText>
                    </CCardBody>
                    </CCard>
            

                    <CCard className="col-12 col-sm-6 col-lg-4">                      
                     <CCardBody className="text-alignment px-md-5 px-lg-4">         
                            <div>
                                 <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1389 41.25C33.4943 41.25 41.8889 32.8553 41.8889 22.5C41.8889 12.1447 33.4943 3.75 23.1389 3.75C12.7836 3.75 4.38895 12.1447 4.38895 22.5C4.38895 32.8553 12.7836 41.25 23.1389 41.25Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.1389 33.75C29.3521 33.75 34.3889 28.7132 34.3889 22.5C34.3889 16.2868 29.3521 11.25 23.1389 11.25C16.9257 11.25 11.8889 16.2868 11.8889 22.5C11.8889 28.7132 16.9257 33.75 23.1389 33.75Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.1389 26.25C25.21 26.25 26.8889 24.5711 26.8889 22.5C26.8889 20.4289 25.21 18.75 23.1389 18.75C21.0679 18.75 19.3889 20.4289 19.3889 22.5C19.3889 24.5711 21.0679 26.25 23.1389 26.25Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    
                      </div>                    
                    <CCardTitle className="feature py-0 my-3">Feature 2</CCardTitle>
                    <CCardText  className="decription px-5 px-sm-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</CCardText>
                    </CCardBody>
                    </CCard>    


                  <CCard className="col-12 col-sm-6 col-lg-4">                      
                  <CCardBody className="text-alignment px-md-5 px-lg-4">         
                            <div>
                                 <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.0777 8.41113H9.8277C7.75663 8.41113 6.0777 10.0901 6.0777 12.1611V38.4111C6.0777 40.4822 7.75663 42.1611 9.8277 42.1611H36.0777C38.1488 42.1611 39.8277 40.4822 39.8277 38.4111V12.1611C39.8277 10.0901 38.1488 8.41113 36.0777 8.41113Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M30.4527 4.66113V12.1611" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.4527 4.66113V12.1611" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.0777 19.6611H39.8277" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            </div>                    
                  <CCardTitle className="feature py-0 my-3">Feature 3</CCardTitle>
                  <CCardText  className="decription px-5 px-sm-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</CCardText>
                  </CCardBody>
                  </CCard>    
    
                 <CCard className="col-12 col-sm-6 col-lg-4 mt-0 mt-lg-5">                      
                  <CCardBody className="text-alignment px-md-5 px-lg-4">         
                            <div>
                               <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <g clip-path="url(#clip0_2_137)">
<path d="M9.56125 33.8955H5.81125C4.81669 33.8955 3.86286 33.5004 3.1596 32.7972C2.45634 32.0939 2.06125 31.1401 2.06125 30.1455V15.1455C2.06125 14.1509 2.45634 13.1971 3.1596 12.4939C3.86286 11.7906 4.81669 11.3955 5.81125 11.3955H11.7925M28.3112 11.3955H32.0612C33.0558 11.3955 34.0096 11.7906 34.7129 12.4939C35.4162 13.1971 35.8112 14.1509 35.8112 15.1455V30.1455C35.8112 31.1401 35.4162 32.0939 34.7129 32.7972C34.0096 33.5004 33.0558 33.8955 32.0612 33.8955H26.08" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.3112 24.5205V20.7705" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8112 11.3955L13.3112 22.6455H24.5612L17.0612 33.8955" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
</g>
                          <defs>
                          <clipPath id="clip0_2_137">
                           <rect width="45" height="45" fill="white" transform="translate(0.186249 0.145508)"/>
                       </clipPath>
                       </defs>
                          </svg>
                            </div>                    
                <CCardTitle className="feature py-0 my-3">Feature 4</CCardTitle>
                <CCardText  className="decription px-5 px-sm-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</CCardText>
                </CCardBody>
                </CCard>  

                <CCard className="col-12 col-sm-6 col-lg-4 mt-0 mt-lg-5">                      
                <CCardBody className="text-alignment px-md-5 px-lg-4">         
                     <div>
                            <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M22.8415 41.251C33.1969 41.251 41.5915 32.8563 41.5915 22.501C41.5915 12.1456 33.1969 3.75098 22.8415 3.75098C12.4862 3.75098 4.09152 12.1456 4.09152 22.501C4.09152 32.8563 12.4862 41.251 22.8415 41.251Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M22.8415 11.251V22.501L30.3415 26.251" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                            </div>                    
               <CCardTitle className="feature py-0 my-3">Feature 5</CCardTitle>
               <CCardText  className="decription px-5 px-sm-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</CCardText>
               </CCardBody>
               </CCard>  
               <CCard className="col-12 col-sm-6 col-lg-4 mt-0 mt-lg-5">       
                <CCardBody className="text-alignment px-md-5 px-lg-4">         
                            <div>
                             <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M39.1032 8.64424C38.1456 7.68613 37.0085 6.92608 35.757 6.40753C34.5055 5.88897 33.1642 5.62207 31.8095 5.62207C30.4548 5.62207 29.1134 5.88897 27.8619 6.40753C26.6105 6.92608 25.4734 7.68613 24.5157 8.64424L22.5282 10.6317L20.5407 8.64424C18.6063 6.70982 15.9827 5.62307 13.247 5.62307C10.5113 5.62307 7.88766 6.70982 5.95324 8.64424C4.01882 10.5787 2.93207 13.2023 2.93207 15.938C2.93207 18.6737 4.01882 21.2973 5.95324 23.2317L7.94074 25.2192L22.5282 39.8067L37.1157 25.2192L39.1032 23.2317C40.0614 22.2741 40.8214 21.137 41.34 19.8855C41.8585 18.634 42.1254 17.2927 42.1254 15.938C42.1254 14.5833 41.8585 13.2419 41.34 11.9905C40.8214 10.739 40.0614 9.60191 39.1032 8.64424V8.64424Z" stroke="#AF4BFB" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                            </div>                    
              <CCardTitle className="feature py-0 my-3">Feature 6</CCardTitle>
              <CCardText  className="decription px-5 px-sm-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</CCardText>
             </CCardBody>
             </CCard>                   
            </div>
            <div className="row mt-4 mb-5">
             <div className="col-12 text-alignment mt-4 mb-3">
                 <button class="btn btn-theme">Register your Tesla</button>
             </div>
             </div>
           </div>
  </div> 
    )
}

export default Feature
