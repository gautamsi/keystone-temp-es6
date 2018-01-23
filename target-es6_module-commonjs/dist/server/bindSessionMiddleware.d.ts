/// <reference types="express" />
import { Keystone } from '../keystone';
import { Application } from 'express';
export declare function bindSessionMiddleware(keystone: Keystone, app: Application): void;
