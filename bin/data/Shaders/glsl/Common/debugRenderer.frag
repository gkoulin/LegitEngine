#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 0, set = 1) uniform sampler2D srcSampler;

layout(location = 0) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;


void main() 
{
  outColor = texture(srcSampler, fragTexCoord);
  //outColor =  texelFetch(srcSampler, ivec2(gl_FragCoord.xy), 0);
}