export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(i => {
        if (itemId === i['objPropName']) {
            return {...i, ...newObjProps}
        }
        return i;
    })
}