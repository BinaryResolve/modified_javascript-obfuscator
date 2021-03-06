import * as ESTree from 'estree';

import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';
import { TransformationStage } from '../../enums/node-transformers/TransformationStage';
import { TNodeWithLexicalScope } from '../../types/node/TNodeWithLexicalScope';

export interface ITransformersRunner {
    /**
     * @param {T} astTree
     * @param {NodeTransformer[]} nodeTransformers
     * @param {TransformationStage} transformationStage
     * @returns {T}
     */
    transform <T extends ESTree.Node = ESTree.Program> (
        astTree: T,
        nodeTransformers: NodeTransformer[],
        transformationStage: TransformationStage
    ): T;

    getNameMap (): Map<TNodeWithLexicalScope, Map<string, string>>;
}
