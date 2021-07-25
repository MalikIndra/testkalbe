
const invoice={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Invoice
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Invoice Id
        </th>
        <th>
            From
        </th>
        <th>
            To
        </th>
        <th>
            Total
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="inv in invoices">
        <td>{{inv.InvoiceId}}</td>
        <td>{{inv.From}}</td>
        <td>{{inv.To}}</td>
        <td>{{inv.Total}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(inv)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(inv.InvoiceId)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-ml modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text">Language</span>
            <input type="text" class="form-control" v-model="Lang">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Currency</span>
            <input type="text" class="form-control" v-model="Currency">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">From</span>
            <input type="text" class="form-control" v-model="Sender">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">To</span>
            <input type="text" class="form-control" v-model="receiver">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Date</span>
            <input type="date" class="form-control" v-model="DateInvoice">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Invoice Due</span>
            <input type="text" class="form-control" v-model="InvoiceDue">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Purchase Order Number</span>
            <input type="text" class="form-control" v-model="PurchaseNumber">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model="linkfilename">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Quantity</span>
            <input type="text" class="form-control" v-model="quantity">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Rate</span>
            <input type="text" class="form-control" v-model="Rate">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Amount</span>
            <input type="text" class="form-control" v-model="Amount">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Sub Total</span>
            <input type="text" class="form-control" v-model="SubTotal">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Easter Discount</span>
            <input type="text" class="form-control" v-model="Discount">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Total</span>
            <input type="text" class="form-control" v-model="Total">
        </div>

        <button type="button" @click="createClick()"
        v-if="InvoiceId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="InvoiceId!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
        invoices:[],
        modalTitle:"",
        InvoiceId:0,
        Lang:"",
        Currency:"",
        Sender:"",
        receiver:"",
        DateInvoice:"",
        InvoiceDue:"",
        PurchaseNumber:"",
        linkfilename:"",
        quantity:"",
        Rate:"",
        Amount:"",
        SubTotal:"",
        Discount:"",
        Total:"",

    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"invoice")
        .then((response)=>{
            this.invoices=response.data;
        });

        axios.get(variables.API_URL+"invoice")
        .then((response)=>{
            this.invoices=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Invoice";
        this.InvoiceId=0;
        this.Lang="";
        this.Currency="";
        this.receiver="";
        this.DateInvoice="";
        this.InvoiceDue="";
        this.PurchaseNumber="";
        this.linkfilename="";
        this.quantity="";
        this.Rate="";
        this.Amount="";
        this.SubTotal="";
        this.Discount="";
        this.Total="";
    },
    editClick(inv){
        this.modalTitle="Edit Invoice" ;
        this.InvoiceId=inv.InvoiceId;
        this.Lang=inv.Lang;
        this.Currency=inv.Currency;
        this.receiver=inv.receiver;
        this.DateInvoice=inv.DateInvoice;
        this.InvoiceDue=inv.InvoiceDue;
        this.PurchaseNumber=inv.PurchaseNumber;
        this.linkfilename=inv.linkfilename;
        this.Rate=inv.Rate;
        this.Amount=inv.Amount;
        this.SubTotal=inv.SubTotal;
        this.Discount=inv.Discount;
        this.Total=inv.Total;


    },
    createClick(){
        axios.post(variables.API_URL+"invoice",{
            InvoiceId:this.InvoiceId,
            Lang:this.Lang,
            Currency:this.Currency,
            receiver:this.receiver,
            DateInvoice:this.DateInvoice,
            InvoiceDue:this.InvoiceDue,
            PurchaseNumber:this.PurchaseNumber,
            linkfilename:this.linkfilename,
            Rate:this.Rate,
            Amount:this.Amount,
            SubTotal:this.SubTotal,
            Discount:this.Discount,
            Total:this.Total
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"purchase",{
            InvoiceId:this.InvoiceId,
            Lang:this.Lang,
            Currency:this.Currency,
            receiver:this.receiver,
            DateInvoice:this.DateInvoice,
            InvoiceDue:this.InvoiceDue,
            PurchaseNumber:this.PurchaseNumber,
            linkfilename:this.linkfilename,
            Rate:this.Rate,
            Amount:this.Amount,
            SubTotal:this.SubTotal,
            Discount:this.Discount,
            Total:this.Total
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"invoice/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    

},
mounted:function(){
    this.refreshData();
}

}