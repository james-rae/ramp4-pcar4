import{aA as e1}from"./main-DyJf3FFo.js";import{e as Y}from"./common-CYWrYyJl.js";function k(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function E(t,a,r,n,u,M,c,e,f,i,l,b,m,q,d,h,x){return t[0]=a,t[1]=r,t[2]=n,t[3]=u,t[4]=M,t[5]=c,t[6]=e,t[7]=f,t[8]=i,t[9]=l,t[10]=b,t[11]=m,t[12]=q,t[13]=d,t[14]=h,t[15]=x,t}function Z(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function G(t,a){if(t===a){const r=a[1],n=a[2],u=a[3],M=a[6],c=a[7],e=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=r,t[6]=a[9],t[7]=a[13],t[8]=n,t[9]=M,t[11]=a[14],t[12]=u,t[13]=c,t[14]=e}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t}function f1(t,a){return z(t,a)||Z(t),t}function z(t,a){const r=a[0],n=a[1],u=a[2],M=a[3],c=a[4],e=a[5],f=a[6],i=a[7],l=a[8],b=a[9],m=a[10],q=a[11],d=a[12],h=a[13],x=a[14],p=a[15],S=r*e-n*c,y=r*f-u*c,g=r*i-M*c,v=n*f-u*e,R=n*i-M*e,I=u*i-M*f,P=l*h-b*d,A=l*x-m*d,D=l*p-q*d,j=b*x-m*h,_=b*p-q*h,w=m*p-q*x;let O=S*w-y*_+g*j+v*D-R*A+I*P;return O?(O=1/O,t[0]=(e*w-f*_+i*j)*O,t[1]=(u*_-n*w-M*j)*O,t[2]=(h*I-x*R+p*v)*O,t[3]=(m*R-b*I-q*v)*O,t[4]=(f*D-c*w-i*A)*O,t[5]=(r*w-u*D+M*A)*O,t[6]=(x*g-d*I-p*y)*O,t[7]=(l*I-m*g+q*y)*O,t[8]=(c*_-e*D+i*P)*O,t[9]=(n*D-r*_-M*P)*O,t[10]=(d*R-h*g+p*S)*O,t[11]=(b*g-l*R-q*S)*O,t[12]=(e*A-c*j-f*P)*O,t[13]=(r*j-n*A+u*P)*O,t[14]=(h*y-d*v-x*S)*O,t[15]=(l*v-b*y+m*S)*O,t):null}function b1(t,a){const r=a[0],n=a[1],u=a[2],M=a[3],c=a[4],e=a[5],f=a[6],i=a[7],l=a[8],b=a[9],m=a[10],q=a[11],d=a[12],h=a[13],x=a[14],p=a[15];return t[0]=e*(m*p-q*x)-b*(f*p-i*x)+h*(f*q-i*m),t[1]=-(n*(m*p-q*x)-b*(u*p-M*x)+h*(u*q-M*m)),t[2]=n*(f*p-i*x)-e*(u*p-M*x)+h*(u*i-M*f),t[3]=-(n*(f*q-i*m)-e*(u*q-M*m)+b*(u*i-M*f)),t[4]=-(c*(m*p-q*x)-l*(f*p-i*x)+d*(f*q-i*m)),t[5]=r*(m*p-q*x)-l*(u*p-M*x)+d*(u*q-M*m),t[6]=-(r*(f*p-i*x)-c*(u*p-M*x)+d*(u*i-M*f)),t[7]=r*(f*q-i*m)-c*(u*q-M*m)+l*(u*i-M*f),t[8]=c*(b*p-q*h)-l*(e*p-i*h)+d*(e*q-i*b),t[9]=-(r*(b*p-q*h)-l*(n*p-M*h)+d*(n*q-M*b)),t[10]=r*(e*p-i*h)-c*(n*p-M*h)+d*(n*i-M*e),t[11]=-(r*(e*q-i*b)-c*(n*q-M*b)+l*(n*i-M*e)),t[12]=-(c*(b*x-m*h)-l*(e*x-f*h)+d*(e*m-f*b)),t[13]=r*(b*x-m*h)-l*(n*x-u*h)+d*(n*m-u*b),t[14]=-(r*(e*x-f*h)-c*(n*x-u*h)+d*(n*f-u*e)),t[15]=r*(e*m-f*b)-c*(n*m-u*b)+l*(n*f-u*e),t}function l1(t){const a=t[0],r=t[1],n=t[2],u=t[3],M=t[4],c=t[5],e=t[6],f=t[7],i=t[8],l=t[9],b=t[10],m=t[11],q=t[12],d=t[13],h=t[14],x=t[15];return(a*c-r*M)*(b*x-m*h)-(a*e-n*M)*(l*x-m*d)+(a*f-u*M)*(l*h-b*d)+(r*e-n*c)*(i*x-m*q)-(r*f-u*c)*(i*h-b*q)+(n*f-u*e)*(i*d-l*q)}function B(t,a,r){const n=a[0],u=a[1],M=a[2],c=a[3],e=a[4],f=a[5],i=a[6],l=a[7],b=a[8],m=a[9],q=a[10],d=a[11],h=a[12],x=a[13],p=a[14],S=a[15];let y=r[0],g=r[1],v=r[2],R=r[3];return t[0]=y*n+g*e+v*b+R*h,t[1]=y*u+g*f+v*m+R*x,t[2]=y*M+g*i+v*q+R*p,t[3]=y*c+g*l+v*d+R*S,y=r[4],g=r[5],v=r[6],R=r[7],t[4]=y*n+g*e+v*b+R*h,t[5]=y*u+g*f+v*m+R*x,t[6]=y*M+g*i+v*q+R*p,t[7]=y*c+g*l+v*d+R*S,y=r[8],g=r[9],v=r[10],R=r[11],t[8]=y*n+g*e+v*b+R*h,t[9]=y*u+g*f+v*m+R*x,t[10]=y*M+g*i+v*q+R*p,t[11]=y*c+g*l+v*d+R*S,y=r[12],g=r[13],v=r[14],R=r[15],t[12]=y*n+g*e+v*b+R*h,t[13]=y*u+g*f+v*m+R*x,t[14]=y*M+g*i+v*q+R*p,t[15]=y*c+g*l+v*d+R*S,t}function H(t,a,r){const n=r[0],u=r[1],M=r[2];if(a===t)t[12]=a[0]*n+a[4]*u+a[8]*M+a[12],t[13]=a[1]*n+a[5]*u+a[9]*M+a[13],t[14]=a[2]*n+a[6]*u+a[10]*M+a[14],t[15]=a[3]*n+a[7]*u+a[11]*M+a[15];else{const c=a[0],e=a[1],f=a[2],i=a[3],l=a[4],b=a[5],m=a[6],q=a[7],d=a[8],h=a[9],x=a[10],p=a[11];t[0]=c,t[1]=e,t[2]=f,t[3]=i,t[4]=l,t[5]=b,t[6]=m,t[7]=q,t[8]=d,t[9]=h,t[10]=x,t[11]=p,t[12]=c*n+l*u+d*M+a[12],t[13]=e*n+b*u+h*M+a[13],t[14]=f*n+m*u+x*M+a[14],t[15]=i*n+q*u+p*M+a[15]}return t}function N(t,a,r){const n=r[0],u=r[1],M=r[2];return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*u,t[5]=a[5]*u,t[6]=a[6]*u,t[7]=a[7]*u,t[8]=a[8]*M,t[9]=a[9]*M,t[10]=a[10]*M,t[11]=a[11]*M,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function V(t,a,r,n){let u=n[0],M=n[1],c=n[2],e=Math.sqrt(u*u+M*M+c*c);if(e<=Y())return void k(t,a);e=1/e,u*=e,M*=e,c*=e;const f=Math.sin(r),i=Math.cos(r),l=1-i,b=a[0],m=a[1],q=a[2],d=a[3],h=a[4],x=a[5],p=a[6],S=a[7],y=a[8],g=a[9],v=a[10],R=a[11],I=u*u*l+i,P=M*u*l+c*f,A=c*u*l-M*f,D=u*M*l-c*f,j=M*M*l+i,_=c*M*l+u*f,w=u*c*l+M*f,O=M*c*l-u*f,F=c*c*l+i;t[0]=b*I+h*P+y*A,t[1]=m*I+x*P+g*A,t[2]=q*I+p*P+v*A,t[3]=d*I+S*P+R*A,t[4]=b*D+h*j+y*_,t[5]=m*D+x*j+g*_,t[6]=q*D+p*j+v*_,t[7]=d*D+S*j+R*_,t[8]=b*w+h*O+y*F,t[9]=m*w+x*O+g*F,t[10]=q*w+p*O+v*F,t[11]=d*w+S*O+R*F,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15])}function m1(t,a,r){const n=Math.sin(r),u=Math.cos(r),M=a[4],c=a[5],e=a[6],f=a[7],i=a[8],l=a[9],b=a[10],m=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=M*u+i*n,t[5]=c*u+l*n,t[6]=e*u+b*n,t[7]=f*u+m*n,t[8]=i*u-M*n,t[9]=l*u-c*n,t[10]=b*u-e*n,t[11]=m*u-f*n,t}function q1(t,a,r){const n=Math.sin(r),u=Math.cos(r),M=a[0],c=a[1],e=a[2],f=a[3],i=a[8],l=a[9],b=a[10],m=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=M*u-i*n,t[1]=c*u-l*n,t[2]=e*u-b*n,t[3]=f*u-m*n,t[8]=M*n+i*u,t[9]=c*n+l*u,t[10]=e*n+b*u,t[11]=f*n+m*u,t}function x1(t,a,r){const n=Math.sin(r),u=Math.cos(r),M=a[0],c=a[1],e=a[2],f=a[3],i=a[4],l=a[5],b=a[6],m=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=M*u+i*n,t[1]=c*u+l*n,t[2]=e*u+b*n,t[3]=f*u+m*n,t[4]=i*u-M*n,t[5]=l*u-c*n,t[6]=b*u-e*n,t[7]=m*u-f*n,t}function J(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function h1(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function K(t,a,r){if(a===0)return Z(t);let n=r[0],u=r[1],M=r[2],c=Math.sqrt(n*n+u*u+M*M);if(c<=Y())return null;c=1/c,n*=c,u*=c,M*=c;const e=Math.sin(a),f=Math.cos(a),i=1-f;return t[0]=n*n*i+f,t[1]=u*n*i+M*e,t[2]=M*n*i-u*e,t[3]=0,t[4]=n*u*i-M*e,t[5]=u*u*i+f,t[6]=M*u*i+n*e,t[7]=0,t[8]=n*M*i+u*e,t[9]=u*M*i-n*e,t[10]=M*M*i+f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,a){const r=Math.sin(a),n=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p1(t,a){const r=Math.sin(a),n=Math.cos(a);return t[0]=n,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d1(t,a){const r=Math.sin(a),n=Math.cos(a);return t[0]=n,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function U(t,a,r){const n=a[0],u=a[1],M=a[2],c=a[3],e=n+n,f=u+u,i=M+M,l=n*e,b=n*f,m=n*i,q=u*f,d=u*i,h=M*i,x=c*e,p=c*f,S=c*i;return t[0]=1-(q+h),t[1]=b+S,t[2]=m-p,t[3]=0,t[4]=b-S,t[5]=1-(l+h),t[6]=d+x,t[7]=0,t[8]=m+p,t[9]=d-x,t[10]=1-(l+q),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function g1(t,a){const r=y1,n=-a[0],u=-a[1],M=-a[2],c=a[3],e=a[4],f=a[5],i=a[6],l=a[7],b=n*n+u*u+M*M+c*c;return b>0?(r[0]=2*(e*c+l*n+f*M-i*u)/b,r[1]=2*(f*c+l*u+i*n-e*M)/b,r[2]=2*(i*c+l*M+e*u-f*n)/b):(r[0]=2*(e*c+l*n+f*M-i*u),r[1]=2*(f*c+l*u+i*n-e*M),r[2]=2*(i*c+l*M+e*u-f*n)),U(t,a,r),t}const y1=e1();function W(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function $(t,a){const r=a[0],n=a[1],u=a[2],M=a[4],c=a[5],e=a[6],f=a[8],i=a[9],l=a[10];return t[0]=Math.sqrt(r*r+n*n+u*u),t[1]=Math.sqrt(M*M+c*c+e*e),t[2]=Math.sqrt(f*f+i*i+l*l),t}function s(t,a){const r=a[0]+a[5]+a[10];let n=0;return r>0?(n=2*Math.sqrt(r+1),t[3]=.25*n,t[0]=(a[6]-a[9])/n,t[1]=(a[8]-a[2])/n,t[2]=(a[1]-a[4])/n):a[0]>a[5]&&a[0]>a[10]?(n=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/n,t[0]=.25*n,t[1]=(a[1]+a[4])/n,t[2]=(a[8]+a[2])/n):a[5]>a[10]?(n=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/n,t[0]=(a[1]+a[4])/n,t[1]=.25*n,t[2]=(a[6]+a[9])/n):(n=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/n,t[0]=(a[8]+a[2])/n,t[1]=(a[6]+a[9])/n,t[2]=.25*n),t}function o(t,a,r,n){const u=a[0],M=a[1],c=a[2],e=a[3],f=u+u,i=M+M,l=c+c,b=u*f,m=u*i,q=u*l,d=M*i,h=M*l,x=c*l,p=e*f,S=e*i,y=e*l,g=n[0],v=n[1],R=n[2];return t[0]=(1-(d+x))*g,t[1]=(m+y)*g,t[2]=(q-S)*g,t[3]=0,t[4]=(m-y)*v,t[5]=(1-(b+x))*v,t[6]=(h+p)*v,t[7]=0,t[8]=(q+S)*R,t[9]=(h-p)*R,t[10]=(1-(b+d))*R,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function t1(t,a,r,n,u){const M=a[0],c=a[1],e=a[2],f=a[3],i=M+M,l=c+c,b=e+e,m=M*i,q=M*l,d=M*b,h=c*l,x=c*b,p=e*b,S=f*i,y=f*l,g=f*b,v=n[0],R=n[1],I=n[2],P=u[0],A=u[1],D=u[2],j=(1-(h+p))*v,_=(q+g)*v,w=(d-y)*v,O=(q-g)*R,F=(1-(m+p))*R,X=(x+S)*R,Q=(d+y)*I,T=(x-S)*I,C=(1-(m+h))*I;return t[0]=j,t[1]=_,t[2]=w,t[3]=0,t[4]=O,t[5]=F,t[6]=X,t[7]=0,t[8]=Q,t[9]=T,t[10]=C,t[11]=0,t[12]=r[0]+P-(j*P+O*A+Q*D),t[13]=r[1]+A-(_*P+F*A+T*D),t[14]=r[2]+D-(w*P+X*A+C*D),t[15]=1,t}function v1(t,a){const r=a[0],n=a[1],u=a[2],M=a[3],c=r+r,e=n+n,f=u+u,i=r*c,l=n*c,b=n*e,m=u*c,q=u*e,d=u*f,h=M*c,x=M*e,p=M*f;return t[0]=1-b-d,t[1]=l+p,t[2]=m-x,t[3]=0,t[4]=l-p,t[5]=1-i-d,t[6]=q+h,t[7]=0,t[8]=m+x,t[9]=q-h,t[10]=1-i-b,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function a1(t,a,r,n,u,M,c){const e=1/(r-a),f=1/(u-n),i=1/(M-c);return t[0]=2*M*e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*M*f,t[6]=0,t[7]=0,t[8]=(r+a)*e,t[9]=(u+n)*f,t[10]=(c+M)*i,t[11]=-1,t[12]=0,t[13]=0,t[14]=c*M*2*i,t[15]=0,t}function R1(t,a,r,n,u){const M=1/Math.tan(a/2);let c;return t[0]=M/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=M,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,u!=null&&u!==1/0?(c=1/(n-u),t[10]=(u+n)*c,t[14]=2*u*n*c):(t[10]=-1,t[14]=-2*n),t}function S1(t,a,r,n){const u=Math.tan(a.upDegrees*Math.PI/180),M=Math.tan(a.downDegrees*Math.PI/180),c=Math.tan(a.leftDegrees*Math.PI/180),e=Math.tan(a.rightDegrees*Math.PI/180),f=2/(c+e),i=2/(u+M);return t[0]=f,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=-(c-e)*f*.5,t[9]=(u-M)*i*.5,t[10]=n/(r-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*r/(r-n),t[15]=0,t}function O1(t,a,r,n,u,M,c){const e=1/(a-r),f=1/(n-u),i=1/(M-c);return t[0]=-2*e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*f,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*i,t[11]=0,t[12]=(a+r)*e,t[13]=(u+n)*f,t[14]=(c+M)*i,t[15]=1,t}function n1(t,a,r,n){const u=a[0],M=a[1],c=a[2];let e=u-r[0],f=M-r[1],i=c-r[2];const l=Y();if(Math.abs(e)<l&&Math.abs(f)<l&&Math.abs(i)<l)return void Z(t);let b=1/Math.sqrt(e*e+f*f+i*i);e*=b,f*=b,i*=b;const m=n[0],q=n[1],d=n[2];let h=q*i-d*f,x=d*e-m*i,p=m*f-q*e;b=Math.sqrt(h*h+x*x+p*p),b?(b=1/b,h*=b,x*=b,p*=b):(h=0,x=0,p=0);let S=f*p-i*x,y=i*h-e*p,g=e*x-f*h;b=Math.sqrt(S*S+y*y+g*g),b?(b=1/b,S*=b,y*=b,g*=b):(S=0,y=0,g=0),t[0]=h,t[1]=S,t[2]=e,t[3]=0,t[4]=x,t[5]=y,t[6]=f,t[7]=0,t[8]=p,t[9]=g,t[10]=i,t[11]=0,t[12]=-(h*u+x*M+p*c),t[13]=-(S*u+y*M+g*c),t[14]=-(e*u+f*M+i*c),t[15]=1}function T1(t,a,r,n){const u=a[0],M=a[1],c=a[2],e=n[0],f=n[1],i=n[2];let l=u-r[0],b=M-r[1],m=c-r[2],q=l*l+b*b+m*m;q>0&&(q=1/Math.sqrt(q),l*=q,b*=q,m*=q);let d=f*m-i*b,h=i*l-e*m,x=e*b-f*l;return q=d*d+h*h+x*x,q>0&&(q=1/Math.sqrt(q),d*=q,h*=q,x*=q),t[0]=d,t[1]=h,t[2]=x,t[3]=0,t[4]=b*x-m*h,t[5]=m*d-l*x,t[6]=l*h-b*d,t[7]=0,t[8]=l,t[9]=b,t[10]=m,t[11]=0,t[12]=u,t[13]=M,t[14]=c,t[15]=1,t}function P1(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function A1(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)}function D1(t,a,r){return t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t[3]=a[3]+r[3],t[4]=a[4]+r[4],t[5]=a[5]+r[5],t[6]=a[6]+r[6],t[7]=a[7]+r[7],t[8]=a[8]+r[8],t[9]=a[9]+r[9],t[10]=a[10]+r[10],t[11]=a[11]+r[11],t[12]=a[12]+r[12],t[13]=a[13]+r[13],t[14]=a[14]+r[14],t[15]=a[15]+r[15],t}function r1(t,a,r){return t[0]=a[0]-r[0],t[1]=a[1]-r[1],t[2]=a[2]-r[2],t[3]=a[3]-r[3],t[4]=a[4]-r[4],t[5]=a[5]-r[5],t[6]=a[6]-r[6],t[7]=a[7]-r[7],t[8]=a[8]-r[8],t[9]=a[9]-r[9],t[10]=a[10]-r[10],t[11]=a[11]-r[11],t[12]=a[12]-r[12],t[13]=a[13]-r[13],t[14]=a[14]-r[14],t[15]=a[15]-r[15],t}function I1(t,a,r){return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=a[3]*r,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*r,t[9]=a[9]*r,t[10]=a[10]*r,t[11]=a[11]*r,t[12]=a[12]*r,t[13]=a[13]*r,t[14]=a[14]*r,t[15]=a[15]*r,t}function j1(t,a,r,n){return t[0]=a[0]+r[0]*n,t[1]=a[1]+r[1]*n,t[2]=a[2]+r[2]*n,t[3]=a[3]+r[3]*n,t[4]=a[4]+r[4]*n,t[5]=a[5]+r[5]*n,t[6]=a[6]+r[6]*n,t[7]=a[7]+r[7]*n,t[8]=a[8]+r[8]*n,t[9]=a[9]+r[9]*n,t[10]=a[10]+r[10]*n,t[11]=a[11]+r[11]*n,t[12]=a[12]+r[12]*n,t[13]=a[13]+r[13]*n,t[14]=a[14]+r[14]*n,t[15]=a[15]+r[15]*n,t}function u1(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function M1(t,a){if(t===a)return!0;const r=t[0],n=t[1],u=t[2],M=t[3],c=t[4],e=t[5],f=t[6],i=t[7],l=t[8],b=t[9],m=t[10],q=t[11],d=t[12],h=t[13],x=t[14],p=t[15],S=a[0],y=a[1],g=a[2],v=a[3],R=a[4],I=a[5],P=a[6],A=a[7],D=a[8],j=a[9],_=a[10],w=a[11],O=a[12],F=a[13],X=a[14],Q=a[15],T=Y();return Math.abs(r-S)<=T*Math.max(1,Math.abs(r),Math.abs(S))&&Math.abs(n-y)<=T*Math.max(1,Math.abs(n),Math.abs(y))&&Math.abs(u-g)<=T*Math.max(1,Math.abs(u),Math.abs(g))&&Math.abs(M-v)<=T*Math.max(1,Math.abs(M),Math.abs(v))&&Math.abs(c-R)<=T*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(e-I)<=T*Math.max(1,Math.abs(e),Math.abs(I))&&Math.abs(f-P)<=T*Math.max(1,Math.abs(f),Math.abs(P))&&Math.abs(i-A)<=T*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(l-D)<=T*Math.max(1,Math.abs(l),Math.abs(D))&&Math.abs(b-j)<=T*Math.max(1,Math.abs(b),Math.abs(j))&&Math.abs(m-_)<=T*Math.max(1,Math.abs(m),Math.abs(_))&&Math.abs(q-w)<=T*Math.max(1,Math.abs(q),Math.abs(w))&&Math.abs(d-O)<=T*Math.max(1,Math.abs(d),Math.abs(O))&&Math.abs(h-F)<=T*Math.max(1,Math.abs(h),Math.abs(F))&&Math.abs(x-X)<=T*Math.max(1,Math.abs(x),Math.abs(X))&&Math.abs(p-Q)<=T*Math.max(1,Math.abs(p),Math.abs(Q))}function c1(t){const a=Y(),r=t[0],n=t[1],u=t[2],M=t[4],c=t[5],e=t[6],f=t[8],i=t[9],l=t[10];return Math.abs(1-(r*r+M*M+f*f))<=a&&Math.abs(1-(n*n+c*c+i*i))<=a&&Math.abs(1-(u*u+e*e+l*l))<=a}function i1(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[8]===0&&t[9]===0&&t[10]===1}const _1=B,w1=r1;Object.freeze(Object.defineProperty({__proto__:null,add:D1,adjoint:b1,copy:k,determinant:l1,equals:M1,exactEquals:u1,frob:A1,fromQuat:v1,fromQuat2:g1,fromRotation:K,fromRotationTranslation:U,fromRotationTranslationScale:o,fromRotationTranslationScaleOrigin:t1,fromScaling:h1,fromTranslation:J,fromXRotation:L,fromYRotation:p1,fromZRotation:d1,frustum:a1,getRotation:s,getScaling:$,getTranslation:W,hasIdentityRotation:i1,identity:Z,invert:z,invertOrIdentity:f1,isOrthoNormal:c1,lookAt:n1,mul:_1,multiply:B,multiplyScalar:I1,multiplyScalarAndAdd:j1,ortho:O1,perspective:R1,perspectiveFromFieldOfView:S1,rotate:V,rotateX:m1,rotateY:q1,rotateZ:x1,scale:N,set:E,str:P1,sub:w1,subtract:r1,targetTo:T1,translate:H,transpose:G},Symbol.toStringTag,{value:"Module"}));export{a1 as A,u1 as B,M1 as C,t1 as D,c1 as G,i1 as H,W as I,$ as O,o as P,n1 as X,V as b,B as c,N as f,L as g,z as h,H as i,s as j,k as n,Z as o,K as p,J as q,E as r,G as s};
