'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">amaizoon documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' : 'data-target="#xs-components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' :
                                            'id="xs-components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-2e27ea3fdac27518ce38cd780a7d029e0bff5d49b802e12604669560c9959709193f4e1d40d591a142e4f7b0d08e346af06e8547d19016aa2ce7e6ba2e51fd26"' : 'data-target="#xs-components-links-module-CoreModule-2e27ea3fdac27518ce38cd780a7d029e0bff5d49b802e12604669560c9959709193f4e1d40d591a142e4f7b0d08e346af06e8547d19016aa2ce7e6ba2e51fd26"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-2e27ea3fdac27518ce38cd780a7d029e0bff5d49b802e12604669560c9959709193f4e1d40d591a142e4f7b0d08e346af06e8547d19016aa2ce7e6ba2e51fd26"' :
                                            'id="xs-components-links-module-CoreModule-2e27ea3fdac27518ce38cd780a7d029e0bff5d49b802e12604669560c9959709193f4e1d40d591a142e4f7b0d08e346af06e8547d19016aa2ce7e6ba2e51fd26"' }>
                                            <li class="link">
                                                <a href="components/CartSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelModule.html" data-type="entity-link" >ModelModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModelModule-cc7040e21b14bdaaf41b6e6c7136e98ad94f7ea974fb62bb3b4c3a304583e5b8083d4cc58aab7dd4be568996af294917a4d80fca3067fb08ce4842f511bb6be3"' : 'data-target="#xs-injectables-links-module-ModelModule-cc7040e21b14bdaaf41b6e6c7136e98ad94f7ea974fb62bb3b4c3a304583e5b8083d4cc58aab7dd4be568996af294917a4d80fca3067fb08ce4842f511bb6be3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModelModule-cc7040e21b14bdaaf41b6e6c7136e98ad94f7ea974fb62bb3b4c3a304583e5b8083d4cc58aab7dd4be568996af294917a4d80fca3067fb08ce4842f511bb6be3"' :
                                        'id="xs-injectables-links-module-ModelModule-cc7040e21b14bdaaf41b6e6c7136e98ad94f7ea974fb62bb3b4c3a304583e5b8083d4cc58aab7dd4be568996af294917a4d80fca3067fb08ce4842f511bb6be3"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductRepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductRepositoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StaticDatasourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaticDatasourceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CartProduct.html" data-type="entity-link" >CartProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductRepositoryService.html" data-type="entity-link" >ProductRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaticDatasourceService.html" data-type="entity-link" >StaticDatasourceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});