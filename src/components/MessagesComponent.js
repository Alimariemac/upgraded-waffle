import React from 'react';

function Messages(props){
return(
    <div class="container-fluid">
        <div class="section">
            <div class="row">
                <div class="col col-12 col-lg-4" id="expand-message-01">
                    <div class="full-height">
                        <div class="sticky-top">
                            <div class="card card-body mb-5 drop-shadow">
                                <div class="message-expand d-flex flex-md-row flex-column">
                                    <div class="mr-auto">
                                        <img src="img/woman1.jpg" class="rounded-circle card-img"
                                            alt="image of person" />
                                    </div>
                                    <div class="col ml-auto">
                                        <p class="card-title">Alice Walker</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-12 col-lg-6 ml-auto mr-auto" id="message-container-01">
                    <div class="card card-body">
                        <div class="d-flex flex-row">
                            <div class="mr-auto">
                                <h3>
                                    Alice Walker
                                </h3>
                                <p>
                                    9:00am, January 12, 2020
                                </p>
                            </div>
                            <div class="ml-auto">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>

                        </div>
                        <div class="message-block">
                            <div class="d-flex flex-md-row flex-column">
                                <div class="mr-auto p-1">
                                    <img src="img/woman1.jpg" class="rounded-circle message-img"
                                        alt="image of person" />
                                </div>
                                <div class="ml-auto p-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet metus
                                    sit amet augue
                                    ullamcorper sollicitudin tincidunt sit amet nibh. Praesent a turpis eget sapien
                                    fringilla accumsan
                                    sed vel metus. Phasellus consectetur, leo in iaculis semper, sapien mi lacinia
                                    nulla, sed sagittis urna
                                    libero quis urna. Pellentesque quis est non purus tincidunt pretium non id lorem.
                                    Nullam tincidunt dictum
                                    quam, volutpat faucibus sem bibendum sed. Nam volutpat massa id erat vulputate, a
                                    hendrerit metus maximus.
                                    Vestibulum dictum quam posuere odio accumsan, eu bibendum elit condimentum. In sem
                                    tellus, volutpat nec
                                    justo et, pharetra vehicula eros. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Aenean nec
                                    dapibus arcu. Duis eget facilisis sapien. Suspendisse tincidunt at sapien non
                                    ullamcorper.
                                </div>
                            </div>
                        </div>
                        <div class="message-block">
                            <div class="d-flex flex-md-row flex-column">
                                <div class="mr-auto p-1">
                                    <img src="img/woman2.jpg" class="rounded-circle message-img"
                                        alt="image of person" />
                                </div>
                                <div class="ml-auto p-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet metus
                                    sit amet augue
                                    ullamcorper sollicitudin tincidunt sit amet nibh. Praesent a turpis eget sapien
                                    fringilla accumsan
                                    sed vel metus. Phasellus consectetur, leo in iaculis semper, sapien mi lacinia
                                    nulla, sed sagittis urna
                                    libero quis urna. Pellentesque quis est non purus tincidunt pretium non id lorem.
                                    Nullam tincidunt dictum
                                    quam, volutpat faucibus sem bibendum sed. Nam volutpat massa id erat vulputate, a
                                    hendrerit metus maximus.
                                    Vestibulum dictum quam posuere odio accumsan, eu bibendum elit condimentum. In sem
                                    tellus, volutpat nec
                                    justo et, pharetra vehicula eros. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Aenean nec
                                    dapibus arcu. Duis eget facilisis sapien. Suspendisse tincidunt at sapien non
                                    ullamcorper.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
)
}
export default Messages;