class VendorsController < ApplicationController

    def index
        vendors = Vendor.all
        render json: vendors

    def create
        Vendor.create(vendor_params)
    end

    def update
        @vendorupdate = Vendor.find(params[:id])
        @vendorupdate.update(vendor_params)
        if @vendorupdate.valid?
            render json: @vendorupdate
        end
    end

    def vendor_params
        params.required(:vendors).permit(:vendor_id, :name, :category, :address, :city, :state, :zip, :description, :phone, :email)
    end

    def destroy
        Vendor.destroy(params[:id])
        render json: Vendor.all
    end

end
