// merged two sorted listes into one (Merge two sorted linked lists)

function SortedMerge(a,b)
{
    let result = null;
       
/* point to the last result pointer */
let lastPtrRef = result;
       
while(1)
{
    if (a == null)
    {
    lastPtrRef = b;
    break;
    }
    else if (b==null)
    {
    lastPtrRef = a;
    break;
    }
    if(a.data <= b.data)
    {
    MoveNode(lastPtrRef, a);
    }
    else
    {
    MoveNode(lastPtrRef, b);
    }
       
    /* tricky: advance to point to the next ".next" field */
    lastPtrRef = ((lastPtrRef).next);
}
return(result);
}