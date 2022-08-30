uniform float time;
varying float pulse;

varying vec2 vUv;
varying vec3 vNormal;


void main() {
    vUv = uv;
    vNormal = normal; 
    vec3 newPosition = position;

    // newPosition.z = 0.5*sin(length(position)*30. + time);
    // newPosition = newPosition + 0.1*normal*snoise(vec4(normal, 0.))
    // pulse = 2.*newPosition.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}