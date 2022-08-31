uniform float time;
uniform sampler2D uTexture;


varying float pulse;
varying vec2 vUv;
varying vec3 vNormal;


void main() {

    // vec4 myimage can be commented out of it's not being used by gl_FragColor
    // vec4 myimage = texture(
    //     uTexture, 
    //     vUv + 0.01*sin(vUv*20. + time)
    //     );

    // gl_FragColor = vec4(vUv, 0., 1.);

    // float sinePulse interacts with gl_FragColor = vec4 sinePulse
    // float sinePulse = (1. + sin(vUv.x*100. + time))*1.;
    float sinePulse = (1. + sin(vUv.y*50. - time))*0.5;
    // gl_FragColor = vec4(sinePulse, 0., 1., 1.);


    // gl_FragColor = myimage;
    gl_FragColor = vec4( 0.5*(pulse+1.), 0., 0., 1.);
}