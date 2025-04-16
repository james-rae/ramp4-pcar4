import{r as g,ha as S,fq as D}from"./main-DTtQVgOw.js";var s;(function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.CannotCompareDateAndTime="CannotCompareDateAndTime",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.FeatureSetDoesNotHaveSubtypes="FeatureSetDoesNotHaveSubtypes",e.UnexpectedToken="UnexpectedToken",e.Unrecognized="Unrecognized",e.UnrecognizedType="UnrecognizedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference",e.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",e.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"})(s||(s={}));const N={[s.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[s.LogicError]:"Logic error - {reason}",[s.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[s.NeverReach]:"Encountered unreachable logic",[s.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[s.ModuleAccessorMustBeString]:"Module accessor must be a string",[s.ModuleExportNotFound]:"Module has no export with provided identifier",[s.ModulesNotSupported]:"Current profile does not support modules",[s.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[s.FunctionNotFound]:"Function not found",[s.FieldNotFound]:"Key not found - {key}",[s.CircularModules]:"Circular module dependencies are not allowed",[s.Cancelled]:"Execution cancelled",[s.UnsupportedHashType]:"Type not supported in hash function",[s.IllegalResult]:"Value is not a supported return type",[s.PortalRequired]:"Portal is required",[s.InvalidParameter]:"Invalid parameter",[s.WrongNumberOfParameters]:"Call with wrong number of parameters",[s.Unrecognized]:"Unrecognized code structure",[s.UnrecognizedType]:"Unrecognized type",[s.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[s.BooleanConditionRequired]:"Conditions must use booleans",[s.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[s.NoFunctionInArray]:"Arrays cannot contain functions.",[s.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[s.KeyAccessorMustBeString]:"Accessor must be a string",[s.KeyMustBeString]:"Object keys must be a string",[s.Immutable]:"Object is immutable",[s.UnexpectedToken]:"Unexpected token",[s.MemberOfNull]:"Cannot access property of null object",[s.MaximumCallDepth]:"Exceeded maximum function depth",[s.OutOfBounds]:"Out of bounds",[s.InvalidIdentifier]:"Identifier not recognized",[s.CallNonFunction]:"Expression is not a function",[s.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[s.AssignModuleFunction]:"Cannot assign function to module variable",[s.UnsupportedUnaryOperator]:"Unsupported unary operator",[s.UnsupportedOperator]:"Unsupported operator",[s.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[s.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[s.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[s.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly",[s.FeatureSetDoesNotHaveSubtypes]:"FeatureSet does not have subtypes"};let G=class extends Error{constructor(...e){super(...e)}},E=class L extends G{constructor(n,a){super(h(a)+n.message,{cause:n}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,L),a?.loc&&(this.loc=a.loc)}},y=class P extends Error{constructor(n,a,o,c){super("Execution error - "+h(o)+g(N[a],c)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,P),o?.loc&&(this.loc=o.loc)}};function h(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}let K=class _ extends Error{constructor(n,a,o,c){super("Compilation error - "+h(o)+g(N[a],c)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,_),o?.loc&&(this.loc=o.loc)}};class k extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,k)}}function W(e,n,a){return a.declaredRootClass==="esri.arcade.arcadeexecutionerror"||a.declaredRootClass==="esri.arcade.arcadecompilationerror"?a.loc===null&&n?.loc?new E(a,{cause:a}):a:(a.declaredRootClass==="esri.arcade.featureset.support.featureseterror"||a.declaredRootClass==="esri.arcade.featureset.support.sqlerror"||a.declaredRootClass,n?.loc?new E(a,{cause:a}):a)}var f;(function(e){e.UnrecognizedUri="UnrecognizedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"})(f||(f={}));const $={[f.UnrecognizedUri]:"Unrecognized uri - {uri}",[f.UnsupportedUriProtocol]:"Unrecognized uri protocol"};let j=class z extends Error{constructor(n,a){super(g($[n],a)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,z)}};const H=new Map([[1025,109452],[1033,109451],[9001,109404],[9002,109405],[9003,109406],[9005,109407],[9014,109408],[9030,109409],[9031,109410],[9033,109411],[9034,109412],[9035,109413],[9036,109414],[9037,109415],[9038,109416],[9039,109417],[9040,109418],[9041,109419],[9042,109420],[9043,109421],[9050,109422],[9051,109423],[9052,109424],[9053,109425],[9060,109426],[9061,109427],[9062,109428],[9063,109429],[9070,109430],[9080,109431],[9081,109432],[9082,109433],[9083,109434],[9084,109435],[9085,109436],[9086,109437],[9087,109438],[9093,109439],[9094,109440],[9095,109441],[9096,109442],[9097,109444],[9098,109445],[9099,109446],[9300,109447],[9301,109448],[9302,109449],[109001,109442],[109002,109443],[109003,109444],[109004,109445],[109005,109450],[109006,109451],[109007,109452],[109008,109453],[109009,109454],[109010,109455],[109011,109456],[109012,109457],[109013,109458],[109014,109459],[109015,109462],[109016,109464],[109017,109465],[109018,109466],[109030,109460],[109031,109461]]);function C(e){return(n,a)=>[n,{type:e,wkid:n,factor:a}]}const p=C("angular"),b=new Map([p(1031,484813681109536e-23),p(9101,1),p(9102,.017453292519943295),p(9103,.0002908882086657216),p(9104,484813681109536e-20),p(9105,.015707963267948967),p(9106,.015707963267948967),p(9109,1e-6),p(9112,.00015707963267948965),p(9113,15707963267948967e-22),p(9114,.0009817477042468104)]),r=C("linear"),l=new Map([r(1025,.001),r(1033,.01),r(9001,1),r(9002,.3048),r(9003,.30480060960121924),r(9005,.3047972654),r(9014,1.8288),r(9030,1852),r(9031,1.0000135965),r(9033,20.11684023368047),r(9034,.2011684023368047),r(9035,1609.3472186944375),r(9036,1e3),r(9037,.9143917962),r(9038,20.1166195164),r(9039,.201166195164),r(9040,.9143984146160287),r(9041,.3047994715386762),r(9042,20.116765121552632),r(9043,.2011676512155263),r(9050,.9143992),r(9051,.3047997333333333),r(9052,20.1167824),r(9053,.201167824),r(9060,.9143992042898124),r(9061,.30479973476327077),r(9062,20.116782494375872),r(9063,.2011678249437587),r(9070,.30480083333333335),r(9080,.30479951024814694),r(9081,.30479841),r(9082,.3047996),r(9083,.3047995),r(9084,.9143985307444408),r(9085,.91439523),r(9086,.9143988),r(9087,.9143985),r(9093,1609.344),r(9094,.3047997101815088),r(9095,.3048007491),r(9096,.9144),r(9097,20.1168),r(9098,.201168),r(9099,.914398),r(9300,.30479933333333337),r(9301,20.116756),r(9302,.20116756),r(109001,.9144),r(109002,.9144018288036576),r(109003,20.1168),r(109004,.201168),r(109005,.1),r(109006,.01),r(109007,.001),r(109008,.0254),r(109009,.025400050800101603),r(109010,5.0292),r(109011,5.029210058420118),r(109012,1853.248),r(109013,1853.184),r(109014,1.7018),r(109015,.8466683600033867),r(109016,.00035277777777777776),r(109017,1e-6),r(109018,1e-9),r(109030,5e4),r(109031,15e4)]),T=l.get(9001),t=C("area"),u=new Map([t(109401,1e4),t(109402,4046.8564224),t(109403,4046.872609874252),t(109404,1),t(109405,.09290304),t(109406,.09290341161327487),t(109407,.09290137299531805),t(109408,3.34450944),t(109409,3429904),t(109410,1.000027193184865),t(109411,404.6872609874253),t(109412,.04046872609874252),t(109413,2589998470319522e-9),t(109414,1e6),t(109415,.8361123569578626),t(109416,404.6783807676053),t(109417,.04046783807676053),t(109418,.8361244606523066),t(109419,.09290271785025629),t(109420,404.6842389557165),t(109421,.04046842389557164),t(109422,.83612589696064),t(109423,.0929028774400711),t(109424,404.6849341289498),t(109425,.04046849341289498),t(109426,.836125904805842),t(109427,.09290287831176021),t(109428,404.6849379260275),t(109429,.04046849379260275),t(109430,.09290354800069446),t(109431,.09290274144751023),t(109432,.09290207073852812),t(109433,.09290279616016),t(109434,.09290273520025),t(109435,.836124673027592),t(109436,.8361186366467529),t(109437,.8361251654414399),t(109438,.83612461680225),t(109439,2589988110336e-6),t(109440,.09290286332673177),t(109441,.09290349665192114),t(109442,.83612736),t(109443,.8361307045194736),t(109444,404.68564224),t(109445,.040468564224),t(109446,.836123702404),t(109447,.09290263360044447),t(109448,404.683871963536),t(109449,.0404683871963536),t(109450,.01),t(109451,1e-4),t(109452,1e-6),t(109453,64516e-8),t(109454,.0006451625806477421),t(109455,25.29285264),t(109456,25.29295381171408),t(109457,3434528149504e-6),t(109458,3434290937856e-6),t(109459,2.89612324),t(109460,25e8),t(109461,225e8),t(109462,.7168473118308245),t(109463,100),t(109464,1244521604938271e-22),t(109465,1e-12),t(109466,1e-18)]),M=u.get(109404),m=[];function F(e){return e.length===0?'""':e[0]==='"'||e[0]==="."||e[0]>="0"&&e[0]<="9"?e:'"'+e.trim()+'"'}function Z(e){let n="",a="",o=!1;for(let c=0;c<e.length;c++){const d=e[c];o?d==='"'?e[c+1]==='"'?(n+=`\\${d}`,c+=1):o=!1:n+=d:/\s/.test(d)||(d===","?(a+=n!==""?F(n)+",":",",n=""):d===")"||d==="]"?(a+=n!==""?F(n)+"]}":"]}",n=""):d==="("||d==="["?(a+='{ "entity": "'+n.toUpperCase().trim()+'", "values":[',n=""):d==='"'?(o=!0,n=""):n+=d)}return JSON.parse(a)}function J(e){try{for(let c=0;c<m.length;c++)if(m[c].spatialReferenceWkt===e)return m[c].unit;const n=O(Z(e));if(n===null)return null;let a=null;for(const c of n.values)if(typeof c=="object"&&(c.entity==="UNIT"||c.entity==="ANGLEUNIT"||c.entity==="LENGTHUNIT")){a=c;break}if(a===null)return null;const o=Y(n.entity==="GEOGCS"||n.entity==="GEOGCRS"?"angular":"linear",a.values[1],a.values[2]);return m.push({spatialReferenceWkt:e,unit:o}),m.length>10&&m.shift(),o}catch{return null}}function Y(e,n,a){if(a!=null)try{if(a.values[0]==="EPSG")return{type:e,wkid:Number.parseInt(a.values[1],10),factor:n}}catch{}return{type:e,factor:n}}function O(e){if(e===null)return null;switch(e.entity){case"GEOGCRS":case"GEOGCS":case"PROJCRS":case"PROJCS":return e}const n=[];for(const a of e.values)if(typeof a=="object"&&a.entity!==void 0)switch(a.entity){case"GEOGCRS":case"GEOGCS":case"PROJCRS":case"PROJCS":return a;default:n.push(a)}for(const a of n){const o=O(a);if(o!=null)return o}return null}const q=-1;function i(e,n){let a;switch(e){case"linear":a=l;break;case"angular":a=b;break;case"area":a=u;break;default:return null}return a.get(n)}function w(e){const n=e.wkid;if(n!=null){const o=S.units[S[n]];if(o!=null)switch(o){case"Meter":return i("linear",9001);case"Foot":return i("linear",9002);case"Foot_US":return i("linear",9003);case"Foot_Clarke":return i("linear",9005);case"Yard_Clarke":return i("linear",9037);case"Link_Clarke":return i("linear",9039);case"Yard_Sears":return i("linear",9040);case"Foot_Sears":return i("linear",9041);case"Chain_Sears":return i("linear",9042);case"Chain_Benoit_1895_B":return i("linear",9062);case"Yard_Indian":return i("linear",9084);case"Yard_Indian_1937":return i("linear",9085);case"Foot_Gold_Coast":return i("linear",9094);case"Chain":return i("linear",9097);case"Chain_Sears_1922_Truncated":return i("linear",9301);case"50_Kilometers":return i("linear",109030);case"150_Kilometers":return i("linear",109031);default:throw new Error(`Unknown unit name: ${o}`)}return D.has(n)?i("angular",9105):i("angular",9102)}const a=e.wkt2||e.wkt;if(a!=null){const o=J(a);if(o!=null){if(o.wkid!=null){const c=i(o.type,o.wkid);if(c!=null)return c}return{type:o.type,wkid:q,factor:o.factor}}}return null}function A(e){if(e.type!=="linear")return null;if(e.wkid===q)return{type:"area",wkid:q,factor:e.factor**2};const n=H.get(e.wkid);return n==null?null:i("area",n)}function I(e){if(e!=null){if(typeof e=="number")return u.get(e)??l.get(e)??b.get(e);if(typeof e!="string")throw new y(null,s.InvalidParameter,null);switch(e.toLowerCase().replaceAll(/[\s-]+/g,"")){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return u.get(109404);case"miles":case"mile":case"squaremile":case"squaremiles":return u.get(109439);case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return u.get(109414);case"acres":case"acre":case"ac":return u.get(109402);case"hectares":case"hectare":case"ha":return u.get(109401);case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return u.get(109442);case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return u.get(109405);case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return u.get(109409);case"millimeter":case"millimeters":case"squaremillimeter":case"squaremillimeters":return u.get(109452);case"centimeter":case"centimeters":case"squarecentimeter":case"squarecentimeters":return u.get(109451);case"decimeter":case"decimeters":case"squaredecimeter":case"squaredecimeters":return u.get(109450);case"inch":case"inches":case"squareinch":case"squareinches":return u.get(109453);case"usfoot":case"usfeet":case"squareusfoot":case"squareusfeet":return u.get(109406);case"usmile":case"usmiles":case"squareusmile":case"squareusmiles":return u.get(109413)}}}function R(e){if(e!=null){if(typeof e=="number")return l.get(e)??b.get(e)??u.get(e);if(typeof e!="string")throw new y(null,s.InvalidParameter,null);switch(e.toLowerCase().replaceAll(/[\s-]+/g,"")){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"hectares":case"hectare":case"ha":return l.get(9001);case"miles":case"mile":case"squaremile":case"squaremiles":return l.get(9093);case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return l.get(9036);case"yard":case"yd":case"yards":case"squareyards":case"squareyard":case"acres":case"acre":case"ac":return l.get(9096);case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return l.get(9002);case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return l.get(9030);case"millimeter":case"millimeters":case"squaremillimeter":case"squaremillimeters":return l.get(109007);case"centimeter":case"centimeters":case"squarecentimeter":case"squarecentimeters":return l.get(109006);case"decimeter":case"decimeters":case"squaredecimeter":case"squaredecimeters":return l.get(109005);case"inch":case"inches":case"squareinch":case"squareinches":return l.get(109008);case"usfoot":case"usfeet":case"squareusfoot":case"squareusfeet":return l.get(9003);case"usmile":case"usmiles":case"squareusmile":case"squareusmiles":return l.get(9035)}}}function U(e,n,a){if(e.type!==n.type)throw new Error(`Incompatible unit types. src=${e.type} dest=${n.type}`);return a*(e.factor/n.factor)}function v(e,n,a){if(e==null||n==null)return a;const o=w(e);if(o==null)throw new Error("Unknown spatial reference unit.");const c=n.type==="area"&&o.type==="linear"?A(o):o;if(c==null)throw new Error(`Unknown spatial reference ${n.type} unit.`);return U(c,n,a)}function x(e,n,a){if(e==null||n==null)return a;const o=w(n);if(o==null)throw new Error("Unknown spatial reference unit.");const c=e.type==="area"&&o.type==="linear"?A(o):o;if(c==null)throw new Error(`Unknown spatial reference ${e.type} unit.`);return U(e,c,a)}function B(e,n,a){return e==null||n==null?a:U(e,n,a)}const V=Object.freeze(Object.defineProperty({__proto__:null,convert:B,convertFromSpatialReferenceUnit:v,convertToSpatialReferenceUnit:x,getSpatialReferenceUnit:w,meters:T,squareMeters:M,toAreaUnit:I,toLengthUnit:R},Symbol.toStringTag,{value:"Module"}));export{M,y as a,j as b,K as c,R as d,V as e,B as h,k as i,f as l,T as o,v as p,I as q,s as r,W as u,x as w};
