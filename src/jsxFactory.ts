export type CreateElementFn = (tagName: string, props: { [propName: string]: any } | null, ...children: any[]) => Element | DocumentFragment;

export interface CustomFactoryConfig {
    createElement: CreateElementFn
}

export const CUSTOM_FACTORY_CONFIGURATION: CustomFactoryConfig = {
    createElement: () => {
        throw Error('Please set an default jsx factory createElement, CUSTOM_FACTORY_CONFIGURATION.createElement = React.createElement')
    }
}

export const customFactory: CreateElementFn = CUSTOM_FACTORY_CONFIGURATION.createElement;
