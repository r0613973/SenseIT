<aside class="mdc-drawer  mdc-drawer--modal shrine-drawer">
    <div class="mdc-drawer__header">
        <img src="../images/sense-it.svg" alt="" class="shrine-logo-drawer" width="88px" height="88px">
        <h1 class="shrine-title">SENSE IT</h1>
    </div>
    <div class="mdc-drawer__content mdc-layout-grid">
        <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item" href="#" tabindex="0" aria-current="page">
                <span class="mdc-list-item__text">Home</span>
            </a>
            <a class="mdc-list-item" href="/temperatuur" tabindex="0">

                <span class="mdc-list-item__text">Metingen</span>
            </a>
            <a class="mdc-list-item" href="#" tabindex="0">

                <span class="mdc-list-item__text">Analyse</span>
            </a>
        </nav>

    </div>


</aside>
<div class="mdc-drawer-scrim"></div>


<header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
                    aria-label="Open navigation menu">menu
            </button>

            <span class="mdc-top-app-bar__title">@yield('title', 'Sense IT')</span>

        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end " role="toolbar">
            <div class="mdc-menu-surface--anchor">

                <button data-tooltip-id="tooltip-id" class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                        id="menu-button" aria-label="Account">account_circle
                </button>
                <div id="tooltip" class="mdc-tooltip" role="tooltip" aria-hidden="true">
                    <div class="mdc-tooltip__surface">
                        Account
                    </div>
                </div>
                <div style="margin-top: 64px" class="mdc-menu mdc-menu-surface">
                    <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                        <li class="mdc-list-item" role="menuitem">
                            <button type="button" class="mdc-button cancel" onclick="location.href='../'">
                                <div class="mdc-button__ripple"></div>
                                <span class="mdc-button__label">
                                  account
                                </span>
                            </button>
                        </li>
                        <li class="mdc-list-item" role="menuitem">
                                <button type="button" class="mdc-button cancel" type="submit" onclick="location.href='/logout'">
                                    <div class="mdc-button__ripple"></div>
                                    <span class="mdc-button__label">
                                  logout
                                </span>
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</header>


