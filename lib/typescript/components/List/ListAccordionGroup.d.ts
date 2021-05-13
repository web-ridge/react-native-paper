import * as React from 'react';
declare type Props = {
    /**
     * Function to execute on selection change.
     */
    onAccordionPress?: (expandedId: string | number) => void;
    /**
     * Id of the currently expanded list accordion
     */
    expandedId?: string | number;
    /**
     * React elements containing list accordions
     */
    children: React.ReactNode;
};
export declare type ListAccordionGroupContextType = {
    expandedId: string | number | undefined;
    onAccordionPress: (expandedId: string | number) => void;
} | null;
export declare const ListAccordionGroupContext: React.Context<ListAccordionGroupContextType>;
declare const _default: React.MemoExoticComponent<{
    ({ expandedId: expandedIdProp, onAccordionPress, children, }: Props): JSX.Element;
    displayName: string;
}>;
export default _default;
