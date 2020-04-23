npx create-react-app react-routing-config
cd my-app
npm start


Setup Routing Steps:
1. install react-router-dom
npm i -S react-router-dom   - Saves to dependencies section
npm i -D - Saves to dev dependencies section
npm i --save-dev/--save react-router-dom - Saves dependencies section

2. Create Routes.js and create two pages, say Dashboard and User

3. 



Enable Module:

LoadModule rewrite_module modules/mod_rewrite.so

Create a <Directory> tag and add configuration

Search string : react routing not working in production/tomcat/etc


Tomcat:
Basically you have to change web.xml file inside conf folder of tomcat directory. $CATALINA_HOME/conf/web.xml

<error-page> 
    <error-code>404</error-code>
    <location>/index.html</location>
</error-page>
And add a webapp that has the page and will answer to the URL under given location.

Other articles:
Proxy configuration
Enabling modules and configuration
IBM Http Server initial configuration
