// Type definitions for WebDriver v5
// Project: https://www.npmjs.com/package/webdriver
// Definitions by: auto generated by https://github.com/webdriverio/webdriverio
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
type WrapWithPromise<T, R> = (...args: ArgumentTypes<T>) => Promise<R>;

declare namespace WebDriver {
    type PageLoadingStrategy = 'none' | 'eager' | 'normal';
    type ProxyTypes = 'pac' | 'noproxy' | 'autodetect' | 'system' | 'manual';
    type WebDriverLogTypes = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent';
    type LoggingPreferenceType =
        'OFF' | 'SEVERE' | 'WARNING' |
        'INFO' | 'CONFIG' | 'FINE' |
        'FINER' | 'FINEST' | 'ALL';
    type FirefoxLogLevels =
        'trace' | 'debug' | 'config' |
        'info' | 'warn' | 'error' | 'fatal';
    type Timeouts = 'script' | 'pageLoad' | 'implicit';

    interface ProxyObject {
        proxyType?: ProxyTypes;
        proxyAutoconfigUrl?: string;
        ftpProxy?: string;
        ftpProxyPort?: number;
        httpProxy?: string;
        httpProxyPort?: number;
        sslProxy?: string;
        sslProxyPort?: number;
        socksProxy?: string;
        socksProxyPort?: number;
        socksVersion?: string;
        socksUsername?: string;
        socksPassword?: string;
    }

    interface LoggingPreferences {
        browser?: LoggingPreferenceType;
        driver?: LoggingPreferenceType;
        server?: LoggingPreferenceType;
        client?: LoggingPreferenceType;
    }

    interface Cookie {
        name: string;
        value: string;
        path?: string;
        httpOnly?: boolean;
        expiry?: number;
        secure?: boolean;
    }

    interface ChromeOptions {
        args?: string[];
        binary?: string;
        extensions?: string[];
        localState?: {
            [name: string]: any;
        };
        detach?: boolean;
        debuggerAddress?: string;
        excludeSwitches?: string[];
        minidumpPath?: string;
        mobileEmulation?: {
            [name: string]: any;
        };
        perfLoggingPrefs?: {
            [name: string]: any;
        };
        windowTypes?: string[];
    }

    interface FirefoxLogObject {
        level: FirefoxLogLevels
    }

    interface FirefoxOptions {
        binary?: string,
        args?: string[],
        profile?: string,
        log?: FirefoxLogObject,
        prefs: {
            [name: string]: string | number | boolean;
        }
    }

    interface Capabilities {
        browserName?: string;
        browserVersion?: string;
        platformName?: string;
        acceptInsecureCerts?: boolean;
        pageLoadStrategy?: PageLoadingStrategy;
        proxy?: ProxyObject;
        setWindowRect?: boolean;
        timeouts?: Timeouts;
        unhandledPromptBehavior?: string;
    }

    interface DesiredCapabilities extends Capabilities {
        // Read-only capabilities
        cssSelectorsEnabled?: boolean;
        handlesAlerts?: boolean;
        version?: string;
        platform?: string;

        // Read-write capabilities
        javascriptEnabled?: boolean;
        databaseEnabled?: boolean;
        locationContextEnabled?: boolean;
        applicationCacheEnabled?: boolean;
        browserConnectionEnabled?: boolean;
        webStorageEnabled?: boolean;
        acceptSslCerts?: boolean;
        rotatable?: boolean;
        nativeEvents?: boolean;
        unexpectedAlertBehaviour?: string;
        elementScrollBehavior?: number;

        // Grid-specific
        seleniumProtocol?: string;
        maxInstances?: number;
        environment?: string;

        // Selenium RC (1.0) only
        commandLineFlags?: string;
        executablePath?: string;
        timeoutInSeconds?: number;
        onlyProxySeleniumTraffic?: boolean;
        avoidProxy?: boolean;
        proxyEverything?: boolean;
        proxyRequired?: boolean;
        browserSideLog?: boolean;
        optionsSet?: boolean;
        singleWindow?: boolean;
        dontInjectRegex?: RegExp;
        userJSInjection?: boolean;
        userExtensions?: string;

        // RemoteWebDriver specific
        'webdriver.remote.sessionid'?: string;
        'webdriver.remote.quietExceptions'?: boolean;

        // Selenese-Backed-WebDriver specific
        'selenium.server.url'?: string;

        loggingPrefs?: {
            browser?: LoggingPreferences;
            driver?: LoggingPreferences;
            server?: LoggingPreferences;
            client?: LoggingPreferences;
        };

        // Firefox
        firefox_binary?: string;
        firefoxProfileTemplate?: string;
        captureNetworkTraffic?: boolean;
        addCustomRequestHeaders?: boolean;
        trustAllSSLCertificates?: boolean;
        changeMaxConnections?: boolean;
        profile?: string;
        pageLoadingStrategy?: string;
        'moz:firefoxOptions'?: FirefoxOptions;

        // IE specific
        'ie.forceCreateProcessApi'?: boolean;
        'ie.browserCommandLineSwitches'?: string;
        'ie.usePerProcessProxy'?: boolean;
        'ie.ensureCleanSession'?: boolean;
        'ie.setProxyByServer'?: boolean;
        ignoreProtectedModeSettings?: boolean;
        ignoreZoomSetting?: boolean;
        initialBrowserUrl?: string;
        enablePersistentHover?: boolean;
        enableElementCacheCleanup?: boolean;
        requireWindowFocus?: boolean;
        browserAttachTimeout?: number;
        logFile?: string;
        logLevel?: string;
        host?: string;
        extractPath?: string;
        silent?: string;
        killProcessesByName?: boolean;

        // Safari specific
        'safari.options'?: {
            [name: string]: any;
        };

        cleanSession?: boolean;

        // Chrome specific
        chromeOptions?: ChromeOptions;
        'goog:chromeOptions'?: ChromeOptions;

        perfLoggingPrefs?: {
            enableNetwork?: boolean;
            enablePage?: boolean;
            enableTimeline?: boolean;
            tracingCategories?: boolean;
            bufferUsageReportingInterval?: boolean;
        };

        // wdio-sauce-service specific
        build?: string;

        // Appium
        deviceName?: string;
        platformVersion?: string;
        app?: string;
        udid?: string;
    }

    interface Options {
        protocol?: string;
        hostname?: string;
        port?: number;
        path?: string;
        queryParams?: {
            [name: string]: string;
        },
        capabilities?: DesiredCapabilities;
        logLevel?: WebDriverLogTypes;
        logOutput?: string | NodeJS.WritableStream
        connectionRetryTimeout?: number;
        connectionRetryCount?: number;
        user?: string;
        key?: string;
    }

    function newSession(
        options?: Options,
        modifier?: (...args: any[]) => any,
        proto?: object,
        commandWrapper?: (commandName: string, fn: (...args: any[]) => any) => any
    ): Promise<Client>;

    interface ClientOptions {
        capabilities: DesiredCapabilities;
        isW3C: boolean;
        isAndroid: boolean;
        isMobile: boolean;
        isIOS: boolean;
        sessionId: string;
    }

    // generated typings
    // ... insert here ...

    interface ClientAsync extends AsyncClient {}
}

type AsyncClient = {
    [K in keyof WebDriver.Client]: WrapWithPromise<WebDriver.Client[K], ReturnType<WebDriver.Client[K]>>
}

declare module "webdriver" {
    export = WebDriver;
}
